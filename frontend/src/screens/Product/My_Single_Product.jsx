import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const My_Single_Product = () => {

    const defaultImg = 'https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png';
    const [count, setCount] = useState(0);

    const handleProductCarCount = (e, bType) => {
        e.preventDefault();
        if (bType === 'inc') {
            setCount(count + 1)
        } else if (bType === 'dec' && count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className='w-[100%] h-auto py-8 overflow-auto flex items-center justify-center'>
            <div className='w-[80%] sm:w-[94%] h-auto overflow-auto'>
                <div className='w-[90%] h-auto mx-[5%] my-12 sm: mb-8 flex flex-wrap items-center justify-center'>
                    <h1 className='w-[100%] text-2xl font-semibold text-center truncate overflow-auto'>Product Name</h1>
                    <hr className='w-[40%] md:w-60% sm:w-[70%]  h-[2px] my-2 rounded-2xl border-none bg-black' />
                </div>
                <div className='w-[50%] sm:w-[100%] h-auto float-left overflow-auto'>
                    <div className='w-[94%] h-auto m-[3%] flex items-center justify-center'>
                        <div className='w-[80%] sm:w-[100%] h-auto px-1 flex items-center justify-center'>
                            <div className='w-[23rem] h-[20rem] md:w-[21rem] md:h-[18rem] sm:w-[18rem]  sm:h-[15rem] border border-sideNav rounded-sm bg-[length:24rem_20rem] bg-center bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${defaultImg})` }}></div>
                        </div>
                    </div>
                    <div className='w-[100%] h-auto flex flex-wrap items-center justify-center'>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
                        <div className='w-20 h-20 m-2 border border-sideNav rounded-sm overflow-hidden flex items-center justify-center bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}>
                            <span className='text-4xl text-white'><FaPlus /></span>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] sm:w-[100%] h-auto p-4 float-left overflow-auto'>
                    <div className='w-[100%] h-auto rounded-xl px-8 py-2 border border-borderColor overflow-auto'>
                        <div className='w-full h-auto float-left overflow-auto'>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Description:&nbsp;</i>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Category:&nbsp;</i>
                                Categoty, SbbCategory
                            </p>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Seller:&nbsp;</i>
                                Seller Name.
                            </p>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Delivery Date:&nbsp;</i>
                                10 Days
                            </p>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Stock:&nbsp;</i>
                                1000
                            </p>
                            <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                                <i className='font-medium text-sideNav'>Price:&nbsp;</i>
                                $1000
                            </p>
                            <div className='w-[100%] h-auto flex items-center justify-start'>
                                <button className='w-8 h-8 rounded-xl bg-sideNav text-white font-bold my-4 flex items-center justify-center' onClick={(e) => handleProductCarCount(e, 'dec')}>-</button>
                                <span className='px-2'>{count}</span>
                                <button className='w-8 h-8 rounded-xl bg-sideNav text-white font-bold my-4 flex items-center justify-center' onClick={(e) => handleProductCarCount(e, 'inc')}>+</button>
                            </div>
                            <button className='px-4 py-1 rounded-xl bg-sideNav text-white font-bold my-4 mr-4'>Buy</button>
                            <button className='px-4 py-1 rounded-xl bg-sideNav text-white font-bold my-4'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default My_Single_Product