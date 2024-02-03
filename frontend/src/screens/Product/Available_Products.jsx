import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FilterComponent from './FilterComponent';
import ShowProducts from '../Home/ShowProducts';

const Available_Products = () => {

  const [numMap, setNumMap] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

  useEffect(() => {
    setNumMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  }, [])

  return (
    <div className='w-[100%] min-h-[200vh] h-auto py-20 bg-productBackground overflow-auto'>

      <FilterComponent />

      {/* Product Start */}
      <div className='lg:w-[80%] md:w-[73%] sm:w-[100%] min-h-[40rem] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[99%] h-auto px-4 mb-4 text-4xl md:text-3xl sm:text-2xl text-center font-bold'>Available Products</p>
        <div className='w-auto h-auto py-4 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-max gap-4 md:gap-2.5'>
          {numMap.map((data) => {
            return (
              <ShowProducts key={data} numData={data} />
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