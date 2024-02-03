import React from 'react';
import ErrorPage from '../../assets/404Error.gif'
import { MdTouchApp } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const Not_Found = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[100%] h-screen flex items-center justify-center overflow-auto'>
            <div className='w-[100%] h-auto flex flex-wrap items-center justify-center'>
                <img className='w-auto h-[25rem]' src={ErrorPage} alt='404' title='404' />
                <div className='w-[100%] h-auto flex items-center justify-center my-8'>
                    <button className='px-4 py-2 text-base text-white font-semibold bg-btnBgColorPrm hover:bg-btnBgColorPrmHover rounded flex items-center justify-center' onClick={()=>navigate('/')}>
                        <span className='animate-pulse'><MdTouchApp/></span><span>&nbsp;&nbsp;Home Page</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Not_Found