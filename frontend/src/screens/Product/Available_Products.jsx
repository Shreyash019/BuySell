import React, { useEffect, useState } from 'react';
import FilterComponent from './FilterComponent';
import ShowProducts from '../Home/ShowProducts';

const Available_Products = () => {

  const [numMap, setNumMap] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

  useEffect(() => {
    setNumMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  }, [])

  return (
    <div className='w-[100%] min-h-[200vh] h-auto py-20 bg-productBackground overflow-auto'>

    <FilterComponent/>

      {/* Product Start */}
      <div className='lg:w-[80%] w-[100%] min-h-[40rem] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[84%] h-auto mb-4 text-4xl md:text-3xl sm:text-2xl font-bold text-start'>Available Products</p>
        <div className='w-auto h-auto py-8 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-6 sm:gap-4'>
          {numMap.map((data) => {
            return (
              <ShowProducts key={data} numData={data} />
            )
          })}
        </div>
      </div>
      {/* Product End */}
    </div>
  )
}

export default Available_Products;