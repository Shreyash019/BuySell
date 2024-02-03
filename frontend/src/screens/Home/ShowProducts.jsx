import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const ShowProducts = () => {

    const navigate = useNavigate()
    const [randomImage, setRandomImage] = useState()
    useEffect(() => {
        setRandomImage('https://assets.ajio.com/medias/sys_master/root/20220601/ddAf/62967eccaeb26921affef4b2/-473Wx593H-464415501-multi-MODEL.jpg')
    }, [])
    return (
        <div className='w-48 md:w-40 sm:w-36 h-56 md:h-48 sm:h-44 m-2 bg-white rounded-xl shadow-lg border border-borderColor' onClick={()=>navigate('/singleproduct')}>
            <div className='w-[100%] h-auto'>
                <div className='w-[100%] h-36 md:h-28 sm:h-24 p-3 overflow-hidden'>
                    <img className='w-[100%] h-36 md:h-28 sm:h-24 rounded-md' src={randomImage} alt='productImage' title='productImage' />
                </div>
                <div className='w-[100%] h-auto flex items-center justify-start'>
                    <p className='w-[100%] h-auto px-3 sm:my-1 block text-lg md:text-md sm:text-sm font-medium truncate overflow-hidden'>Product Name</p>
                </div>
            </div>
            <div className='w-[100%] h-auto mb-1 flex items-center justify-center overflow-hidden'>
                <p className='w-full h-auto px-3 flex items-center justify-start text-xs'><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></p>
            </div>
            <div className='w-[90%] mx-[5%] h-6 px-2 bg-borderColor rounded-full flex items-center justify-center'>
                <p className='w-[45%] text-base md:text-sm sm:text-xs truncate overflow-hidden'>Price:&nbsp;</p>
                <p className='w-[55%] text-base md:text-sm sm:text-xs text-right truncate overflow-hidden'>$20</p>
            </div>
        </div>
    )
}

export default ShowProducts