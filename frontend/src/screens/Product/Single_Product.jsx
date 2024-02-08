import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productJson from '../../products.json';

const Single_Product = () => {

  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()
  const defaultImg = 'https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png';

  useEffect(() => {
    let filterData = productJson.products.filter((data) => {
      if (id.toString().toLowerCase() === data._id.toString().toLowerCase()) {
        return data
      }
    })
    setProduct(filterData[0])
  }, [product])

  return (
    <>
      {product
        ?
        <>
          <div className='w-[100%] h-auto py-8 overflow-auto flex items-center justify-center'>
            <div className='w-[85%] md:w-[92%] sm:w-[100%] h-auto overflow-auto'>
              <div className='w-[90%] h-auto mx-[5%] my-12 sm:mb-8 flex flex-wrap items-center justify-center'>
                <h1 className='w-[100%] text-2xl font-semibold text-center truncate overflow-auto'>{product?.product_Name}</h1>
                <hr className='w-[40%] md:w-60% sm:w-[70%] h-[2px] my-2 rounded-2xl border-none bg-black' />
              </div>
              <div className='w-[50%] sm:w-[100%] h-auto mt-4 float-left flex flex-wrap items-center justify-center overflow-auto'>
                <div className='w-[94%] h-auto flex items-center justify-center'>
                  <div className='w-[100%] h-auto px-1 flex items-center justify-center'>
                    <div className='w-[80%] h-[20rem] md:w-[21rem] md:h-[18rem] sm:w-[18rem] sm:h-[15rem] flex items-center justify-center border border-sideNav rounded-sm bg-[length:100%_20rem] bg-center bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${product?.product_Image[0] || ''})` }}>
                      {product?.product_Image[0] ? <></> : <span className='font-bold text-imgBgColorHover text-3xl md:text-xl sm:text-sm'>No image</span>}
                    </div>
                  </div>
                </div>
                <div className='w-[80%] h-auto flex flex-wrap items-center justify-center'>
                  {product?.product_Image[1]
                    ? <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${product?.product_Image[1] || ''})` }}></div>
                    : <></>
                  }
                  {product?.product_Image[2]
                    ? <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${product?.product_Image[2] || ''})` }}></div>
                    : <></>
                  }
                  {product?.product_Image[3]
                    ? <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${product?.product_Image[3] || ''})` }}></div>
                    : <></>
                  }
                  {product?.product_Image[4]
                    ? <div className='w-20 h-20 m-2 border border-sideNav rounded-sm bg-[length:5rem_5rem] bg-center bg-no-repeat' style={{ backgroundImage: `url(${product?.product_Image[4] || ''})` }}></div>
                    : <></>
                  }
                </div>
              </div>
              <div className='w-[50%] sm:w-[100%] h-auto p-4 float-left overflow-auto'>
                <div className='w-[100%] h-auto rounded-xl px-8 py-2 border border-borderColor overflow-auto'>
                  <div className='w-full h-auto float-left overflow-auto'>
                    <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor line-clamp-4'>
                      <i className='font-medium text-sideNav'>Summary:&nbsp;</i>
                      {product.summary}
                    </p>
                    <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                      <i className='font-medium text-sideNav'>Category:&nbsp;</i>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </p>
                    <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                      <i className='font-medium text-sideNav'>Seller:&nbsp;</i>
                      {product.seller}
                    </p>
                    <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                      <i className='font-medium text-sideNav'>Stock:&nbsp;</i>
                      1000
                    </p>
                    <p className='text-lg md:text-md sm:text-sm font-normal py-1 my-4 border-b border-borderColor'>
                      <i className='font-medium text-sideNav'>Price:&nbsp;</i>
                      {product.currency + product.price}
                    </p>
                    <button className='px-4 py-1 rounded-xl bg-sideNav text-white font-bold my-4 mr-4' onClick={() => { navigate('/usercart') }}>Buy</button>
                    <p className='text-sm md:text-xs sm:text-[0.6rem] font-normal py-1 my-4'>
                      <i className='font-medium text-sideNav'>Expected Delivery:&nbsp;</i>
                      8 to 10 Days.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-[80%] sm:w-[100%] h-auto mx-[10%] sm:mx-0 float-left mt-28 mb-20 border border-imgBgColorHover shadow-sm shadow-imgBgColorHover overflow-hidden'>
                {/*  */}
                {product.description.map((data, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div key={index} className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
                        <div className='w-[45%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
                          <img className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem]' src={data.des_Img} alt='def3rev' />
                        </div>
                        <div className='w-[55%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left lg:px-6 px-4 overflow-hidden'>
                          <p className='w-[100%} h-auto my-6 line-clamp-6 lg:text-base md:text-sm text-xs'>{data.details}</p>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div key={index} className='w-[100%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
                        <div className='w-[55%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left px-4 overflow-hidden'>
                          <p className='w-[100%} h-auto my-6 line-clamp-6 lg:text-base md:text-sm text-xs'>{data.details}</p>
                        </div>
                        <div className='w-[45%] lg:h-[15rem] md:h-[12rem] h-[10rem] float-left overflow-hidden'>
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
        </>
        :
        <></>
      }
    </>

  )
}

export default Single_Product