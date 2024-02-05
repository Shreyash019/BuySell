import React from 'react';
import { useNavigate } from 'react-router-dom';

const Single_Product = () => {

  const navigate = useNavigate()
  const defaultImg = 'https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png';
  const bufd = [1, 2, 3, 4]

  return (
    <div className='w-[100%] h-auto py-8 overflow-auto flex items-center justify-center'>
      <div className='w-[84%] sm:w-[94%] h-auto overflow-auto'>
        <div className='w-[90%] h-auto mx-[5%] my-12 sm: mb-8 flex flex-wrap items-center justify-center'>
          <h1 className='w-[100%] text-2xl font-semibold text-center truncate overflow-auto'>Product Name</h1>
          <hr className='w-[40%] md:w-60% sm:w-[70%]  h-[2px] my-2 rounded-2xl border-none bg-black' />
        </div>
        <div className='w-[50%] sm:w-[100%] h-auto float-left overflow-auto'>
          <div className='w-[94%] h-auto m-[3%] flex items-center justify-center'>
            <div className='w-[80%] sm:w-[100%] h-auto px-1 flex items-center justify-center'>
              <div className='w-[23rem] h-[20rem] md:w-[21rem] md:h-[18rem] sm:w-[18rem] sm:h-[15rem] border border-sideNav rounded-sm bg-[length:24rem_20rem] bg-center bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${defaultImg})` }}></div>
            </div>
          </div>
          <div className='w-[100%] h-auto flex flex-wrap items-center justify-center'>
            <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
            <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
            <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
            <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${defaultImg})` }}></div>
          </div>
        </div>
        <div className='w-[50%] sm:w-[100%] h-auto p-4 float-left overflow-auto'>
          <div className='w-[100%] h-auto rounded-xl px-8 py-2 border border-borderColor overflow-auto'>
            <div className='w-full h-auto float-left overflow-auto'>
              <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor line-clamp-4'>
                <i className='font-medium text-sideNav'>Description:&nbsp;</i>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                <i className='font-medium text-sideNav'>Category:&nbsp;</i>
                Categoty, SubCategory
              </p>
              <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                <i className='font-medium text-sideNav'>Seller:&nbsp;</i>
                Seller Name.
              </p>
              <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                <i className='font-medium text-sideNav'>Stock:&nbsp;</i>
                1000
              </p>
              <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                <i className='font-medium text-sideNav'>Price:&nbsp;</i>
                ₹1000
              </p>
              <button className='px-4 py-1 rounded-xl bg-sideNav text-white font-bold my-4 mr-4' onClick={() => { navigate('/usercart') }}>Buy</button>
              <button className='px-4 py-1 rounded-xl bg-sideNav text-white font-bold my-4' onClick={() => { navigate('/usercart') }}>Add</button>
              <p className='text-sm md:text-xs sm:text-[0.6rem] font-normal py-1 my-4'>
                <i className='font-medium text-sideNav'>Expected Delivery:&nbsp;</i>
                8 to 10 Days.
              </p>
            </div>
          </div>
        </div>
        <div className='w-[80%] h-auto mx-[10%] float-left mt-28 mb-20 shadow-xl shadow-imgBgColorHover overflow-hidden'>
          {/*  */}
          {bufd.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden mb-12'>
                  <div className='w-[49%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
                    <img className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem]' src={defaultImg} alt='def3rev' />
                  </div>
                  <div className='w-[51%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left lg:px-6 px-4 overflow-hidden'>
                    <p className='w-[100%] h-auto font-medium'>Title</p>
                    <p className='w-[100%} h-auto line-clamp-6 lg:text-base md:text-sm text-xs'>
                      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                  </div>
                </div>
              )
            } else {
              return (
                <div className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden mb-12'>
                  <div className='w-[51%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left px-4 overflow-hidden'>
                    <p className='w-[100%] h-auto font-medium'>Title</p>
                    <p className='w-[100%} h-auto line-clamp-6 lg:text-base md:text-sm text-xs'>
                      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                  </div>
                  <div className='w-[49%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
                    <img className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem]' src={defaultImg} alt='def3rev' />
                  </div>
                </div>
              )
            }
          })
          }
          {/*  */}

        </div>
      </div>
    </div>
  )
}

export default Single_Product