import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FilterComponent from './FilterComponent';
import ShowProducts from '../Home/ShowProducts';
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import productJson from '../../products.json';

const Available_Products = () => {

  const [productData, setProductData] = useState(productJson.products)
  useEffect(() => {
    setProductData(productJson.products)
  }, [])

  return (
    <div className='w-[100%] min-h-[200vh] h-auto py-20 bg-productBackground overflow-auto'>

      <FilterComponent />

      {/* Product Start */}
      <div className='lg:w-[80%] md:w-[73%] sm:w-[100%] min-h-[40rem] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[99%] h-auto px-4 mb-4 text-4xl md:text-3xl sm:text-2xl font-bold flex items-center justify-center'><BiSolidPurchaseTagAlt className='text-3xl md:text-2xl sm:text-xl text-noCartBg mr-2'/>Available Products</p>
        <div className='w-auto h-auto py-4 place-items-center grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-max gap-4 md:gap-2.5'>
          {productData.map((data) => {
            return (
              <ShowProducts key={data._id} product={data} />
            )
          })}
        </div>
      </div>
      {/* Product End */}
      <Helmet> <title>Buy&Sell | Products</title></Helmet>
    </div>
  )
}

export default Available_Products;