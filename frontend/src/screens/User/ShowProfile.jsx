import React from 'react'

const ShowProfile = () => {
    return (
        <div className='w-[100%] min-h-screen h-auto mb-8 py-2 px-0.5 overflow-auto'>
            <div className='w-[30%] sm:w-[100%] min-h-[10rem] h-auto float-left bg-sideNav rounded-2xl'>
                <div className='w-[100%] h-auto py-4 px-8 flex items-center justify-start'>
                    <div className='w-[5rem] h-[5rem] float-left '>
                        <div className='w-[5rem] h-[5rem] float-left bg-black border border-white rounded-full'></div>
                    </div>
                    <div className='w-auto h-[5rem] ml-4 p-2'>
                        <p className='w-[100%] h-auto text-md text-white font-semibold sm:text-left truncate overflow-hidden'>Username</p>
                        <p className='w-[100%] h-auto text-md text-white font-semibold sm:text-left truncate overflow-hidden'>Email</p>
                    </div>
                </div>
                <hr className='w-[80 h-[1px] mx-[10%] my-2 bg-black border-none rounded-full' />
            </div>
            <div className='w-[70%] sm:w-[100%] min-h-screen h-auto float-left pl-[7%] pr-[16%] md;px-[10%] sm:px-3'>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>First name</p>
                    <input type='text' placeholder='First name' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Middle name</p>
                    <input type='text' placeholder='Middle name' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Last name</p>
                    <input type='text' placeholder='Last name' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>


                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Code</p>
                    <input type='text' placeholder='Country code' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Phone</p>
                    <input type='text' placeholder='Phone number' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>


                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Plot number</p>
                    <input type='text' placeholder='Plot number' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Address</p>
                    <input type='text' placeholder='Address' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>City</p>
                    <input type='text' placeholder='City' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>State</p>
                    <input type='text' placeholder='State' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Country</p>
                    <input type='text' placeholder='Country' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
                <div className='w-[100%] h-[2rem] my-6 text-sm sm:text-xs text-white flex items-center justify-startborder border-borderColor bg-black overflow-hidden rounded-lg'>
                    <p className='w-[20%] md:w-[25%] sm:w-[30%] h-auto px-3 py-1 bg-black border-r border-subNav'>Zip Code</p>
                    <input type='text' placeholder='Zip Code' className='w-[80%] md:w-[85%] sm:w-[70%] h-full bg-sideNav px-2 py-1 outline-none' readOnly/>
                </div>
            </div>
        </div>
    )
}

export default ShowProfile