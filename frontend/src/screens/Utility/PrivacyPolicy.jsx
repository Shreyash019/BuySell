import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    return (
        <div className='w-[100%] h-auto float-left overflow-auto'>
            <div className='w-[80%] md:w-[86%] sm:w-[98%] h-auto mx-[10%] md:mx-[7%] sm:mx-[1%] p-2 mt-8 mb-20'>
                <div className='w-full h-auto text-left text-3xl md:text-2xl sm:text-xl font-bold mb-4'>
                    Privacy Policy for [Your Project Name]
                </div>
                <div className='w-full h-auto text-left text-xs lg:text-sm'>This Privacy Policy outlines how [Your Project Name] collects, uses, maintains, and discloses information gathered from users of the [Your Project Name] platform.</div>
                <div className='w-[full h-auto float-left overflow-auto my-8'>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>1. Information Collection:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>We may collect personal identification information from users when they register on the platform. This information may include names, email addresses, and other details required for account creation.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>2. Non-Personal Identification Information:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>We may collect non-personal identification information about users whenever they interact with [Your Project Name]. Non-personal identification information may include browser name, type of computer, and technical information about users' means of connection to our platform.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>3. Web Browser Cookies:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] may use "cookies" to enhance user experience. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Note that some parts of the platform may not function properly if cookies are disabled.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>4. How We Use Collected Information:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] may collect and use users' personal information for the following purposes:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>- To personalize user experience.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>- To improve our platform.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>- To process transactions.</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>- To send periodic emails related to transactions and updates.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>5. How We Protect Your Information:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information and data stored on our platform.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>6. Sharing Your Personal Information:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>7. Changes to this Privacy Policy:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>[Your Project Name] has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. Users are encouraged to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left mb-4'>
                        <p className='w-full h-auto text-lg md:text-base sm:text-sm font-bold'>8. Your Acceptance of These Terms:</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>By using [Your Project Name], you signify your acceptance of this policy. If you do not agree to this policy, please do not use our platform.</p>
                    </div>

                    <div className='w-[100%] h-auto overflow-auto float-left my-4'>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs mb-4'>If you have any questions about this Privacy Policy, the practices of [Your Project Name], or your dealings with this platform, please contact us at [Your Contact Information].</p>
                        <p className='w-full h-auto text-md md:text-sm sm:text-xs'>This Privacy Policy was last updated on [Date].</p>
                    </div>

                </div>
            </div>
            <Helmet> <title>Buy&Sell | Privacy Policy</title></Helmet>
        </div>
    )
}

export default PrivacyPolicy