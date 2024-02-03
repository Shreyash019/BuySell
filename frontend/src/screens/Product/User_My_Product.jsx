import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import ShowProducts from './ShowProducts';
import { TiPlus } from "react-icons/ti";

const User_My_Product = () => {

  const navigate = useNavigate();
  const [numMap, setNumMap] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

  useEffect(() => {
    setNumMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  }, [])

  return (
    <div>
      {/* Product Start */}
      <div className='w-[100%]  min-h-[40rem] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[70%] sm:w-[86%] h-auto mt-12 mb-2 text-4xl md:text-3xl sm:text-2xl font-bold text-start'>My Products</p>
        <div className='w-[72%] sm:w-[88%] h-auto my-2 sm:my-0 p-2 overflow-auto flex items-center justify-end'>
          <button className='px-3 py-1 text-sm font-semibold text-white bg-btnBgColorPrm hover:bg-btnBgColorPrmHover rounded-xl flex items-center justify-center outline outline-offset-2 outline-borderColor hover:outline-imgBgColorHover' onClick={()=>navigate('/newproduct')}><TiPlus className='animate-pulse text-lg'/>New</button></div>
        <div className='w-auto h-auto py-8 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 sm:gap-6'>
          {numMap.map((data) => {
            return (
              <ShowProducts key={data} numData={data} />
            )
          })}
        </div>
      </div>
      {/* Product End */}
      <Helmet> <title>Buy&Sell | My Products</title></Helmet>
    </div>
  )
}

export default User_My_Product