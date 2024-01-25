import React, { useEffect, useState } from 'react';
import ShowProducts from './ShowProducts';

const User_Sold_Products = () => {

  const [numMap, setNumMap] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

  useEffect(() => {
    setNumMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  }, [])

  return (
    <div>
      {/* Product Start */}
      <div className='w-[100%]  min-h-[40rem] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[86%] h-auto mb-4 text-4xl md:text-3xl sm:text-2xl font-bold text-start'>Sold Products</p>
        <div className='w-auto h-auto py-8 grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-6 sm:gap-4'>
          {numMap.map((data) => {
            return (
              <ShowProducts key={data} numData={'sold'} />
            )
          })}
        </div>
      </div>
      {/* Product End */}</div>
  )
}

export default User_Sold_Products