import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch('/create-intent', {
            method: 'POST',
        });

        const { client_secret: clientSecret } = await res.json();

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <div className='w-[100%] min-h-[40rem] h-auto flex items-center justify-center'>
            <div className='w-[50%] sm:w-[100%] h-auto p-8 mx-4 mt-16 my-8 shadow-md shadow-imgBgColorHover border border-imgBgColorHover rounded-lg'>
                <form onSubmit={handleSubmit}>
                    <div className='w-[100%}'></div>
                    <PaymentElement />
                    {/* <div className='w-[100%] h-auto  my-6 flex items-center justify-center'>
                        <button type="submit" disabled={!stripe || !elements} className='w-[100%] px-4 py-2 text-base text-white font-semibold rounded-sm bg-noCartBg hover:bg-noCartBgHover transition-all'>Pay</button>
                    </div> */}
                    {/* Show error message to your customers */}
                    {errorMessage && <div>{errorMessage}</div>}
                </form>
                <div className='w-[100%] h-auto mt-8 my-6 flex items-center justify-center'>
                    <button type="submit" disabled={!stripe || !elements} className='w-[100%] px-4 py-2 text-base text-white font-semibold rounded-sm bg-noCartBg hover:bg-noCartBgHover transition-all' onClick={() => setTimeout(() => { navigate('/allorders') }, 800)}>Pay</button>
                </div>
            </div>

        </div>
    );
};

export default PaymentForm;