import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShowProducts from './ShowProducts';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FcRatings } from "react-icons/fc";

const HomeScreen = () => {

  const navigate = useNavigate();
  let rvCard = [1, 2, 3]
  const imgDefault = 'https://th.bing.com/th/id/R.bfe2d60471c16d18c445f54f5786b8db?rik=9yxxQ7D8WYbXXA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2018%2f02%2frandom-pictures-32.jpg&ehk=Hl%2bP9CBJ8VGVggmXVQyMXxI8mp8%2bUcLFwnJa0qC1Jjs%3d&risl=&pid=ImgRaw&r=0'
  const [numMap, setNumMap] = useState([1, 2, 3, 4]);
  const [bgCol, setBgCol] = useState('https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg');

  const handleCorosal = () => {
    if (bgCol === 'https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg') {
      setBgCol('https://sendbird.imgix.net/cms/20230621_Tips-for-developing-a-successful-ecommerce-app-blog-cover.png')
    } else {
      setBgCol('https://www.oppenheimer.com/_assets/images/images/news-and-media/2022/june/ep_44_client_access_2048x1365.jpg')
    }
  }

  useEffect(() => {
    setNumMap([1, 2, 3, 4]);
  }, [])

  useEffect(() => { }, [bgCol])

  return (
    <div className='w-[100%] h-auto overflow-auto bg-productBackground'>
      <div className='w-full h-[36rem] md:h-[28rem] sm:h-[16rem] float-left flex items-center justify-center'>
        <div className={`w-[100%] h-[36rem] md:h-[28rem] sm:h-[16rem] bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${bgCol})` }}>
          <div className='w-[5%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex items-center justify-center' onClick={() => handleCorosal()}><MdOutlineArrowBackIosNew /></div>
          <div className='w-[90%] h-[36rem] lg:px-20 md:px-12 sm:px-8 md:h-[28rem] sm:h-[16rem] float-start text-white text-2xl flex items-center justify-center'>
            <p className='text-6xl md:text-4xl sm:text-3xl text-white font-bold break-word'>Buying and Selling product is now a game.</p>
          </div>
          <div className='w-[5%] h-[36rem] md:h-[28rem] sm:h-[16rem] float-right text-white text-2xl flex items-center justify-center' onClick={() => handleCorosal()}><MdOutlineArrowForwardIos /></div>
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

        <h1 className='w-[80%] h-auto mx-[10%] text-center float-left text-2xl font-bold mt-2 mb-6 flex items-center justify-center'><FcRatings className='text-3xl'/>&nbsp;User's Impressions</h1>
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
                <div className='w-[100%] h-auto my-1 flex items-center justify-center'>
                  <p className='w-auto max-w-[100%] h-auto text-sm truncate overflow-hidden flex'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                </div>
                <div className='w-[100%] h-[6rem] py-1 px-4 block overflow-hidden'>
                  <p className='w-[100%] h-auto text-sm font-normal line-clamp-4'>
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