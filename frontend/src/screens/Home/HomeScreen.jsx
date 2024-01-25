import React, { useEffect, useState } from 'react';
import ShowProducts from './ShowProducts';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const HomeScreen = () => {

  const [numMap, setNumMap] = useState([1,2,3,4]);
  const [bgCol, setBgCol] = useState('https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg');

  const handleCorosal = () => {
    if(bgCol === 'https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg'){
      setBgCol('https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png')
    } else {
      setBgCol('https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg')
    }
  }

  useEffect(()=>{
    setNumMap([1,2,3,4]);
  }, [])

  useEffect(()=>{},[bgCol])

  return (
    <div className='w-[100%] h-auto overflow-auto bg-productBackground'>
      <div className='w-full h-[36rem] md:h-[28rem] sm:h-[16rem] float-left flex items-center justify-center'>
        <div className={`w-[100%] h-[36rem] md:h-[28rem] sm:h-[16rem] bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${bgCol})`}}>
          <div className='w-[5%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex items-center justify-center' onClick={()=>handleCorosal()}><MdOutlineArrowBackIosNew/></div>
          <div className='w-[90%] h-[36rem] lg:px-20 md:px-12 sm:px-8 md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex items-center justify-center'>
            <p className='text-6xl md:text-4xl sm:text-3xl text-white font-bold break-word'>Buying and Selling product is now a game.</p>
          </div>
          <div className='w-[5%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-right text-white text-2xl flex items-center justify-center' onClick={()=>handleCorosal()}><MdOutlineArrowForwardIos/></div>
        </div>
      </div>
      <div className='w-[100%] h-auto float-left flex flex-wrap items-start justify-center overflow-auto mb-20'>
        <p className='w-[100%] h-auto py-6 mt-8 md:mt-8 sm:mt-4 text-4xl md:text-3xl sm:text-2xl font-bold text-center'>Available Products</p>
        <div className='w-[80%] h-auto py-2 my-2 text-xs font-semibold text-black flex items-center justify-end'>
          <span className='px-2 py-1.5 rounded-2xl border border-subNav hover:border-borderColor hover:bg-borderColor hover:text-black'>Veiw All</span>
        </div>
        <div className='w-auto h-auto pb-12 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 sm:gap-6'>
          {numMap.map((data)=>{
            return(
              <ShowProducts key={data} numData={data} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen