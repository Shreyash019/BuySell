import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShowProducts from './ShowProducts';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { FcRatings } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";

const HomeScreen = () => {

  const navigate = useNavigate();
  let bgCard = [
    'https://static-blog.omniconvert.com/blog/wp-content/uploads/2020/09/21135804/How-to-do-Growth-of-eCommerce-Website-scaled.jpg',
    'https://www.teikametrics.com/wp-content/uploads/2021/10/Ecom-biz-buyer-ready-blog.jpg',
    'https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png',

  ]
  let rvCard = [1, 2, 3]
  const imgDefault = 'https://th.bing.com/th/id/R.bfe2d60471c16d18c445f54f5786b8db?rik=9yxxQ7D8WYbXXA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2018%2f02%2frandom-pictures-32.jpg&ehk=Hl%2bP9CBJ8VGVggmXVQyMXxI8mp8%2bUcLFwnJa0qC1Jjs%3d&risl=&pid=ImgRaw&r=0'
  const [numMap, setNumMap] = useState([1, 2, 3, 4]);
  const [bgCol, setBgCol] = useState(0);

  const handleCorosal = () => {
    if(bgCol === 0) setBgCol(1)
    else if(bgCol === (bgCard.length-1))setBgCol(0)
    else setBgCol(prev => prev + 1)
  }

  useEffect(() => {
    setNumMap([1, 2, 3, 4]);
  }, [])

  useEffect(() => { }, [bgCol])

  return (
    <div className='w-[100%] h-auto overflow-auto bg-productBackground'>
      <div className='w-full h-[36rem] md:h-[28rem] sm:h-[16rem] float-left flex items-center justify-center'>
      <div className={`w-[100%] h-[36rem] md:h-[28rem] sm:h-[16rem] bg-center bg-no-repeat bg-[length:100%_36rem] md:bg-[length:100%_28rem] sm:bg-[length:100%_16rem]`} style={{ backgroundImage: `url(${bgCard[bgCol]})` }}>
          <div className='w-[3%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex items-center justify-center' onClick={() => handleCorosal()}><MdOutlineArrowBackIosNew className='animate-pulse' /></div>
          <div className='w-[94%] h-[36rem] lg:px-12 md:px-8 sm:px-4 md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex flex-wrap items-center justify-center overflow-hidden'>
            <div className='w-[100%] h-auto lg:translate-y-4 sm:translate-y-2'>
              <div className="w-[60%] sm:w-[70%] h-auto mr-[40%] sm:mr-[30%] bg-gradient-to-r from-noCartBg to-brownDark text-transparent bg-clip-text">
                <p className='w-[100%] h-auto mb-2 sm:mb-1 text-5xl md:text-2xl sm:text-base font-bold break-word'>Unleash Your Shopping Experience</p>
                <p className='w-[100%] h-auto mb-8 sm:mb-2 text-5xl md:text-2xl sm:text-base font-bold break-word'>Start Buying & Selling Today</p>
                <p className='w-[100%] h-auto text-lg md:text-sm sm:text-xs font-normal sm:font-light bg-gradient-to-r from-navyLight to-navy text-transparent bg-clip-text'>Discover a vibrant marketplace where buying and selling meet effortlessly. Join us to explore a world of unique products and seamless transactions. Welcome to our platform!</p>
              </div>
            </div>
            <div className='w-[100%] h-4 bottom-0 lg:translate-y-6 flex items-center justify-center'>
              <GoDotFill className={`${bgCol === 0 ? 'text-sideNav' : 'text-borderColor'} sm:text-xs sm:mx-0.5 cursor-pointer rounded-full`} onClick={()=>setBgCol(0)}/>
              <GoDotFill className={`${bgCol === 1 ? 'text-sideNav' : 'text-borderColor'} sm:text-xs sm:mx-0.5 cursor-pointer rounded-full`} onClick={()=>setBgCol(1)}/>
              <GoDotFill className={`${bgCol === 2 ? 'text-sideNav' : 'text-borderColor'} sm:text-xs sm:mx-0.5 cursor-pointer rounded-full`} onClick={()=>setBgCol(2)}/>
            </div>
          </div>
          <div className='w-[3%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-right text-white text-2xl flex items-center justify-center' onClick={() => handleCorosal()}><MdOutlineArrowForwardIos className='animate-pulse' /></div>
        </div>
      </div>
      <div className='w-[100%] h-auto float-left flex flex-wrap items-start justify-center overflow-auto'>
        <p className='w-[100%] h-auto py-6 mt-8 md:mt-8 sm:mt-4 text-4xl md:text-3xl sm:text-2xl font-bold text-center'>Available Products</p>
        <div className='w-[80%] h-auto py-2 my-2 text-xs font-semibold text-black flex items-center justify-end'>
          <span className='px-2 py-1.5 rounded-2xl border border-subNav bg-btnTypeDef hover:border-borderColor hover:bg-btnTypeOne hover:text-black' onClick={() => navigate('allproducts')}>Veiw All</span>
        </div>
        <div className='w-auto h-auto pb-20 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 sm:gap-6 place-items-center'>
          {numMap.map((data) => {
            return (
              <ShowProducts key={data} numData={data} />
            )
          })}
        </div>
      </div>
      <div className='w-[100%] h-auto px-1 py-6 float-left flex flex-wrap items-center justify-center overflow-auto'>

        <h1 className='w-[80%] h-auto mx-[10%] text-center float-left text-2xl font-bold mt-2 mb-6 flex items-center justify-center'><FcRatings className='text-3xl' />&nbsp;User's Impressions</h1>
        <div className='w-[80%] h-auto mx-[10%] overflow-hidden grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center my-6'>

          {/* Cards start */}
          {rvCard.map((data) => {
            return (
              <div ket={data} className='w-[18rem] h-[15rem] my-2 border border-imgBgColorHover shadow shadow-borderColor rounded-md overflow-hidden'>
                <div className='w-[100%] h-[6rem] float-left bg-white'>
                  <div className='w-28 h-[6rem] float-left flex items-center justify-center'>
                    <img className='w-20 h-20 rounded-full border border-borderColor shadow-md shadow-borderColor' src={imgDefault} alt='random' title='random' />
                  </div>
                  <div className='w-auto h-full float-left py-3'>
                    <h1 className='text-lg font-semibold truncate overflow-hidden'>Username</h1>
                    <p className='text-xs font-medium text-locTextColor'>Location</p>
                  </div>
                </div>
                <div className='w-[100%] h-[9rem] p-2 float-left bg-reviewCardBg'>
                  <div className='w-[100%] h-[8rem] py-1 px-4 block overflow-hidden'>
                    <p className='w-[100%] h-auto text-sm font-normal line-clamp-5'>
                      Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum Lorem epsum.
                    </p>
                  </div>
                </div>
              </div>
            )
          })
          }

          {/* Cards End */}
        </div>
        <div className='w-[80%] h-auto mx-[10%] p-2 overflow-auto mb-8 flex items-center justify-end'>
          <button className='px-4 py-1 text-white text-sm font-semibold bg-btnBgColorPrm hover:bg-btnBgColorPrmHover rounded-xl border border-btnBgColorPrm hover:border-sideNav outline outline-borderColor hover:outline-imgBgColorHover'>All</button>
        </div>
      </div>
      <Helmet> <title>Buy&Sell | Home</title></Helmet>
    </div>
  )
}

export default HomeScreen