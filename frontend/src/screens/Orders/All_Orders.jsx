import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { TiArrowRepeat } from "react-icons/ti";


const All_Orders = () => {
  return (
    <div className='w-[100%] h-auto overflow-auto my-8'>
      <div className='w-[70%] md:w-[80%] sm:w-[96%] h-auto mx-[15%] md:mx-[10%] sm:mx-[2%] my-4'>
        <p className='w-[100%] h-auto py-2 mb-4 sm:mb-2 text-2xl sm:text-xl font-bold'>Your orders</p>
        <hr className='w-[100%] h-[1px] mb-20 sm:mb-12 border-none bg-sideNav' />
      </div>
      <div className='w-[100%] h-auto overflow-auto flex flex-wrap items-center justify-center my-8'>
        <div className='w-[70%] md:w-[80%] sm:w-[96%] h-[18rem] mx-[15%] md:mx-[10%] sm:mx-[2%] border rounded-lg overflow-hidden'>
          <div className='w-[100%] min-h-16 h-auto bg-borderColor overflow-auto'>
            <div className='w-[40%] h-auto p-4 sm:p-2 float-left flex flex-wrap items-center justify-center overflow-auto'>
              <p className='w-[100%] h-auto text-sm sm:text-xs text-sideNav truncate overflow-auto'>ORDER PLACED</p>
              <p className='w-[100%] h-auto text-sm sm:text-xs text-sideNav truncate overflow-auto'>Date</p>
            </div>
            <div className='w-[60%] h-auto p-4 sm:p-2 float-left flex flex-wrap items-center justify-center overflow-auto'>
              <p className='w-[100%] h-auto text-sm sm:text-xs text-sideNav text-right truncate overflow-auto'>ORDER # 4f9g7vbc</p>
              <p className='w-[100%] h-auto text-sm sm:text-xs text-orderLink text-right truncate overflow-auto' onClick={()=>toast('Yeah')}>View Details</p>
            </div>
          </div>
          <div className='w-[100%] min-h-full h-auto py-2 px-4 overflow-auto'>
            <div className='w-[100%] h-12'>
              <p className='w-full h-auto text-2xl md:text-xl sm:text-lg font-bold'>Delivered Date 26-Jan-2024</p>
            </div>
            <div className='w-[100%] h-auto overflow-auto'>
              <div className='w-[20%] md:w-[25%] sm:w-[30%] h-32 md:h-28 sm:h-24 float-left flex items-center justify-center overflow-hidden'>
                <img className='w-32 md:w-28 sm:w-24 h-32 md:h-28 sm:h-24 border border-black' src='https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png' alt='orderImage' title='orderImage'/>
              </div>
              <div className='w-[80%] md:w-[75%] sm:w-[70%] h-auto px-8 float-left overflow-auto'>
                <p className='w-[100%] h-auto text-lg sm:text-sm font-medium underline underline-offset-2'>Ordered Product Details</p>
                <p className='w-[100%]h-auto text-sm'>Return window closed on 26 Jan 2024</p>
                <div className='w-[100%] h-auto overflow-auto'>
                  <button className='w-auto h-8 px-4 my-2 rounded-lg bg-black text-white text-xs font-medium flex items-center justify-center overflow-auto'><TiArrowRepeat className='text-xl mr-1'/>Order Again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet> <title>Buy&Sell | Orders</title></Helmet>
    </div>
  )
}

export default All_Orders