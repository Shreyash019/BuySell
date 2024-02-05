import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
        /*...*/
    },
};

const PaymentPage = () => {

    return (
        <div className='w-[100%] min-h-[40rem] h-auto flex items-center justify-center overflow-auto'>
            <Elements stripe={stripePromise} options={options}>
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default PaymentPage;


// const App = () => (
//   <Elements stripe={stripePromise} options={options}>
//     <CheckoutForm />
//   </Elements>
// );

// ReactDOM.render(<App />, document.body);