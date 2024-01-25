import React, { useEffect, useState } from 'react';
import UserSignUp from './User_Sign_Up';
import UserSignIn from './User_Sign_In';

const Authenticarion = () => {

  const [activeComponent, setActiveComponent] = useState('up')
  const [bgImg, setBgImg] = useState('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg');


  useEffect(()=>{
    setBgImg('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg')
  }, [activeComponent])
  return (
    <div className='w-[100%] h-screen overflow-auto bg-contain bg-no-repeat flex items-center justify-center' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='w-[40%] min-h-[30rem] h-auto bg-white rounded-lg border border-borderColor shadow shadow-borderColor overflow-auto'>
            <div className='w-[100%] h-10 overflow-hidden'>
              <button className={`w-[50%] h-10 border-r border-white text-center text-sm font-bold bg-subNav ${activeComponent === 'up' ? 'text-white': 'text-sideNav'}`} onClick={()=>setActiveComponent('up')}>SIGN UP</button>
              <button className={`w-[50%] h-10 border-l border-white text-center text-sm font-bold bg-subNav ${activeComponent === 'up' ? 'text-sideNav': 'text-white'}`} onClick={()=>setActiveComponent('in')}>SIGN IN</button>
            </div>
            <div className='p-4'>{activeComponent === 'up' ? <UserSignUp/> : <UserSignIn/>}</div>
        </div>
    </div>
  )
}

export default Authenticarion