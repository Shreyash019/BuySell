import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { SiWindicss } from "react-icons/si";
import { RiDeleteBinLine } from "react-icons/ri";

const User_Cart = () => {
    const navigate = useNavigate()
    let rndom = 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/11/11/asset/buzzfeed-prod-web-02/sub-buzz-12985-1528730443-3.jpg'
    const [isCart, setIsCart] = useState(true);

    useEffect(() => { }, [isCart])

    return (
        <div>
            <div className='w-[100%] min-h-[30rem] sm:min-h-[32rem] h-auto overflow-auto flex items-center justify-center'>
                {isCart ?
                    <div className='w-[50%] md:w-[80%] sm:w-[99%] h-auto my-16 sm:my-6 overflow-auto'>
                        <div className='w-full h-auto p-4 sm:py-2 mb-4 sm:mb-2 float-left border border-borderColor rounded-md flex items-center justify-center overflow-auto'>
                            <p className='w-[50%] h-auto float-left text-sm font-semibold text-left'>1 ITEMS ADDED</p>
                            <p className='w-[50%] h-auto float-left text-xl text-noCartBg hover:text-noCartBgHover flex items-center justify-end'><RiDeleteBinLine onClick={() => setIsCart(false)}/></p>
                        </div>
                        <div className='w-full h-[12rem] sm:h-[10rem] my-4 sm:my-2 float-left border rounded-md overflow-hidden'>
                            <div className='w-[35%] sm:w-[40%] h-full float-left bg-borderColor'>
                                <img className='w-[100%] h-full' src={rndom} alt='random' />
                            </div>
                            <div className='w-[65%] sm:w-[60%] h-[12rem] sm:h-[10rem] p-4 md:p-3 sm:p-2 float-left'>
                                <p className='w-[100%] h-auto mb-2 text-md sm:text-sm font-medium'>Product name</p>
                                <p className='w-[100%] h-auto text-sm sm:text-xs font-medium'>Catetegoty, Sub Category</p>
                                <p className='w-[100%] h-auto mb-3 sm:mb-2 text-xs sm:text-[0.6rem] text-textGrayFrt font-medium'>Sold By: Seller</p>
                                <p className='w-[100%] h-auto mb-2 text-sm sm:text-xs font-medium'>₹1000&nbsp;&nbsp;
                                    <b className='line-through font-light'>₹1100</b>&nbsp;&nbsp;
                                    <b className='font-light text-red'>9% off</b>
                                </p>
                                <div className='w-[100%] h-auto mb-2 text-sm sm:text-xs font-medium'>
                                    <div className='w-max h-auto px-4 py-1 rounded-full flex items-center justify-start bg-borderColor'>
                                        <span>Qty |&nbsp;</span>
                                        <select className='bg-borderColor outline-none'>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                </div>
                                <p className='w-[100%] h-auto mb-2 text-xs sm:text-[0.6rem]'><b className='font-medium'>15 Days</b>&nbsp;<b className='text-textGrayFrt'>return  available.</b></p>
                            </div>
                        </div>
                        <div className='w-full h-auto px-8 sm:px-4 py-4 my-4 sm:my-2 float-left border rounded-md overflow-auto'>
                            <p className='w-[100%] h-auto mb-2 text-sm sm:text-xs font-medium'>PRICE DETAILS (1 Items)</p>
                            <hr className='w-full h-[1px] my-1 bg-borderColor border-none outline-none' />
                            <div className='w-full h-auto my-1.5 flex items-center justify-center'>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-left'>Total MRP</p>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-right'>₹1000</p>
                            </div>
                            <div className='w-full h-auto my-1.5 flex items-center justify-center'>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-left'>Discount on MRP</p>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-right'>₹1000</p>
                            </div>
                            <div className='w-full h-auto my-1.5 flex items-center justify-center'>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-left'>Platform Fee</p>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-right'>₹1000</p>
                            </div>
                            <div className='w-full h-auto my-1.5 flex items-center justify-center'>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-left'>Shipping Fee</p>
                                <p className='w-[50%] h-auto text-sm sm:text-xs text-right'>₹1000</p>
                            </div>
                            <hr className='w-full h-[1px] my-2 bg-borderColor border-none outline-none' />
                            <div className='w-full h-auto my-1 flex items-center justify-center'>
                                <p className='w-[50%] h-auto text-md sm:text-sm text-left font-semibold'>Total Amount</p>
                                <p className='w-[50%] h-auto text-md sm:text-sm text-right font-semibold'>₹1000</p>
                            </div>
                        </div>
                        <div className='w-[100%] h-[4.25rem] mt-12 float-left bg-subNav'>
                            <p className='w-full h-[1.5rem] px-4 text-[0.7rem] flex items-center justify-center'>1 Product selected for order</p>
                            <button className='w-full h-[2.75rem] bg-noCartBg hover:bg-noCartBgHover flex items-center justify-center text-sm text-white font-bold' onClick={()=>navigate('/payment')}>PLACE ORDER</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='w-full h-auto float-left mt-4 overflow-auto flex items-center justify-center'>
                            <SiWindicss className='text-[5rem] sm:text-[3rem] text-imgBgColorHover mr-8' />
                            <RiShoppingBag3Fill className='text-noCartBg text-[12rem] sm:text-[6rem]'/>
                        </div>
                        <div className='w-full h-auto mt-8 float-left overflow-auto'>
                            <p className='text-xl sm:text-sm font-bold text-center'>Seems no gravity pull!, Hurry up do something!</p>
                            <p className='text-md sm:text-xs text-center text-textGrayFrt my-2'>There is nothing in you bag. Let's add something.</p>
                            <div className='w-full h-auto p-4 flex items-center justify-center'>
                                <button className='px-4 py-2 my-2 bg-noCartBg hover:bg-noCartBgHover text-sm sm:text-xs text-white font-bold rounded-md' onClick={()=>navigate('/allproducts')}>Products</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default User_Cart