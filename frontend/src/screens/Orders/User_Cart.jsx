import React, { useEffect, useState } from 'react';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { SiWindicss } from "react-icons/si";

const User_Cart = () => {

    const [isCart, setIsCart] = useState(false);

    useEffect(() => {
        setIsCart(false);
    }, [])

    return (
        <div>
            {isCart ?
                <></>
                :
                <div className='w-[100%] min-h-[30rem] h-auto overflow-auto flex items-center justify-center'>
                    <div>
                        <div className='w-full h-auto float-left mt-4 overflow-auto flex items-center justify-center'>
                            <SiWindicss className='text-[5rem] text-imgBgColorHover mr-8' /><RiShoppingBag3Fill className='text-noCartBg text-[12rem]' />
                        </div>
                        <div className='w-full h-auto mt-8 float-left overflow-auto'>
                            <p className='text-xl font-bold text-center'>Seems no gravity pull!, Hurry up do something!</p>
                            <p className='text-md text-center text-textGrayFrt my-2'>There is nothing in you bag. Let's add something.</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default User_Cart