import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import UserSignUp from './User_Sign_Up';
import UserSignIn from './User_Sign_In';

const Authenticarion = () => {

  const [activeComponent, setActiveComponent] = useState('up')
  const [bgImg, setBgImg] = useState('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg');


  useEffect(()=>{
    setBgImg('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg')
  }, [activeComponent])
  return (
    <div className='w-[100%] h-auto overflow-auto bg-contain bg-no-repeat flex items-center justify-center' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='w-[40%] md:w-[60%] sm:w-[94%] h-auto my-20 pb-8 bg-white rounded-2xl border border-borderColor shadow-xl shadow-borderColor overflow-auto'>
            <div className='w-[100%] h-10 overflow-hidden'>
              <button className={`w-[50%] h-10 border-r border-white text-center text-sm font-bold bg-comTitle ${activeComponent === 'up' ? 'text-red': 'text-sideNav'}`} onClick={()=>setActiveComponent('up')}>SIGN UP</button>
              <button className={`w-[50%] h-10 border-l border-white text-center text-sm font-bold bg-comTitle ${activeComponent === 'up' ? 'text-sideNav': 'text-red'}`} onClick={()=>setActiveComponent('in')}>SIGN IN</button>
            </div>
            <div className='p-4'>{activeComponent === 'up' ? <UserSignUp/> : <UserSignIn/>}</div>
        </div>
        <Helmet> <title>Buy&Sell | {activeComponent === 'up' ? 'Sign Up' : 'Sign In'}</title></Helmet>
    </div>
  )
}

export default Authenticarion