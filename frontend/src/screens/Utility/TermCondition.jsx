import React from 'react'
import { Helmet } from 'react-helmet';

const TermCondition = () => {
    return (
        <div className='w-[100%] h-auto float-left overflow-auto'>
            <div className='w-[80%] md:w-[86%] sm:w-[98%] h-auto mx-[10%] md:mx-[7%] sm:mx-[1%] p-2 mt-8 mb-20'>
                <div className='w-full h-auto text-left text-3xl md:text-2xl sm:text-xl font-bold mb-4'>
                    Terms and Conditions for Buying and Selling Products on Buy&Sell.
                </div>
                
                <div className='w-[full h-auto float-left overflow-auto my-8'>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>1. Acceptance of Terms</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>By accessing and using [Your Project Name], you agree to comply with and be bound by these terms and conditions.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>2. User Registration:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Users must register an account to buy or sell products on the platform.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Provide accurate and up-to-date information during the registration process.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>3. Product Listings:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>By accessing and using [Your Project Name], you agree to comply with and be bound by these terms and conditions.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>4. Transactions:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Buyers agree to pay the specified price for products.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Sellers agree to deliver products as described within a reasonable timeframe.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>5. Payment and Fees:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Payment methods and any applicable fees are outlined on the platform.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Sellers may be subject to transaction fees, clearly communicated during the listing process.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>6. Privacy Policy:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] respects user privacy. The privacy policy details the collection and use of personal information.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>7. Dispute Resolution:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>In case of disputes between buyers and sellers, [Your Project Name] will attempt to mediate.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Users are encouraged to communicate and resolve issues amicably.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>8. Intellectual Property:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Users agree not to infringe on the intellectual property rights of others.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] respects intellectual property rights and encourages users to do the same.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>9. Termination of Accounts:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] reserves the right to terminate or suspend accounts for violations of these terms and conditions.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>10. Disclaimer of Liability:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] is not responsible for the quality, safety, or legality of the products listed.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>Users engage in transactions at their own risk.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>11. Governing Law:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>These terms and conditions are governed by the laws of [Your Jurisdiction].</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>12. Changes to Terms:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] reserves the right to update these terms and conditions at any time. Users will be notified of changes.</p>
                    </div>
                    <div className='w-[100%] h-auto overflow-auto float-left my-4'>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>By using [Your Project Name], you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
                    </div>

                </div>
            </div>
            <Helmet> <title>Buy&Sell | Term & Conditions</title></Helmet>
        </div>
    )
}

export default TermCondition