import React, { useEffect, useState } from 'react';

const ShowProducts = () => {
    const [randomImage, setRandomImage] = useState()
    useEffect(() => {
        setRandomImage('https://assets.ajio.com/medias/sys_master/root/20220601/ddAf/62967eccaeb26921affef4b2/-473Wx593H-464415501-multi-MODEL.jpg')
    }, [])
    return (
        <div className='w-48 md:w-40 sm:w-36 h-56 md:h-48 sm:h-44 bg-white rounded-xl shadow-lg border border-borderColor'>
            <div className='w-[100%] h-48 md:h-40 sm:h-36'>
                <div className='w-[100%] h-40 md:h-32 sm:h-28 lg:p-4 p-3 overflow-hidden'>
                    <img className='w-[100%] h-36 md:h-28 sm:h-24 rounded-md' src={randomImage} alt='productImage' title='productImage' />
                </div>
                <div className='w-[100%] h-8 flex items-center justify-start'>
                    <p className='w-[100%] h-auto px-3 block text-lg md:text-md sm:text-sm font-medium truncate overflow-hidden'>Product Name</p>
                </div>
            </div>
            <div className='w-[90%] mx-[5%] h-6 px-2 bg-borderColor rounded-full flex items-center justify-center'>
                <p className='w-[45%] text-base md:text-sm sm:text-xs truncate overflow-hidden'>Price:&nbsp;</p>
                <p className='w-[55%] text-base md:text-sm sm:text-xs text-right truncate overflow-hidden'>$20</p>
            </div>
        </div>
    )
}

export default ShowProducts