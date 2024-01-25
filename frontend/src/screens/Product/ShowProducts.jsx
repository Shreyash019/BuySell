import React, { useState, useEffect } from 'react';

const ShowProducts = ({ key, numData }) => {
    const [randomImage, setRandomImage] = useState();
    const [actionType, setActionType] = useState()

    useEffect(() => {
        setRandomImage('https://assets.ajio.com/medias/sys_master/root/20220601/ddAf/62967eccaeb26921affef4b2/-473Wx593H-464415501-multi-MODEL.jpg')
        if (numData === 'bought') {
            setActionType('bought')
        } else if (numData === 'sold') {
            setActionType('sold')
        }
    }, [actionType])

    return (
        <div key={key} className='w-48 md:w-40 sm:w-36 h-56 md:h-48 sm:h-44 bg-white rounded-xl shadow-lg border border-borderColor'>
            <div className='w-[100%] h-48 md:h-40 sm:h-36'>
                <div className='w-[100%] h-40 md:h-32 sm:h-28 overflow-hidden flex items-center justify-center px-3 pt-1'>
                    <img className='w-[100%] h-36 md:h-28 sm:h-24 rounded-md float-left' src={randomImage} alt='productImage' title='productImage' />
                </div>
                <div className='w-[100%] h-6 flex items-center justify-start px-3'>
                    <p className='w-[100%] h-auto block text-md sm:text-sm font-medium truncate overflow-hidden'>Product Name</p>
                </div>
            </div>
            <div className='w-[90%] mx-[5%] h-6 bg-borderColor rounded-full flex items-center justify-center'>
                {
                    actionType ?
                        <div className={`w-[100%] h-6 px-2 rounded-full flex items-center justify-center ${actionType === 'bought' ? 'bg-subNav' : 'bg-showProductSold'}`}>
                            {
                                actionType === 'bought'
                                    ? <p className='w-[100%] h-auto px-2 text-sm sm:text-xs font-medium text-center truncate overflow-hidden'>Bought at $20</p>
                                    : <p className='w-[100%] h-auto px-2 text-sm sm:text-xs font-medium text-center truncate overflow-hidden'>Sold at $20</p>
                            }
                        </div>
                        :
                        <>
                            <p className='w-[45%] h-6 px-2 text-base md:text-sm sm:text-xs truncate overflow-hidden'>Price:&nbsp;</p>
                            <p className='w-[55%] h-6 px-2 text-base md:text-sm sm:text-xs text-right truncate overflow-hidden'>$20</p>
                        </>
                }
            </div>
        </div>
    )
}

export default ShowProducts