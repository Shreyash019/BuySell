import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ForgotPassword from './Forgot_Password';
import ResetPassword from './Reset_Password';


const Password_Recovery = () => {
    
    const [userEmail, setUserEmail] = useState()
    const [activeComponent, setActiveComponent] = useState('forgot')
    const [bgImg, setBgImg] = useState('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg');
  
    const handleForgotSubmit = (email) => {
        setUserEmail(email)
        console.log(userEmail)
        setActiveComponent('reset')
    }
    useEffect(()=>{
      setBgImg('https://intexsoft.com/app/uploads/2023/12/1920x568-Benefits-of-Choosing-Shopify-for-Ecommerce-Store-Development.jpg')
    }, [activeComponent])
    return (
      <div className='w-[100%] h-auto float-left overflow-auto bg-contain bg-no-repeat flex items-center justify-center' style={{backgroundImage: `url(${bgImg})`}}>
          <div className='w-[40%] md:w-[60%] sm:w-[94%] min-h-[15rem] h-auto my-20 pb-8 bg-white rounded-2xl border border-borderColor shadow-xl shadow-borderColor overflow-auto'>
              <div className='p-4'>{activeComponent === 'forgot' ? <ForgotPassword handleForgotSubmit={handleForgotSubmit}/> : <ResetPassword/>}</div>
          </div>
          <Helmet> <title>Buy&Sell | {activeComponent === 'forgot'?  "Forgot Password" : "Reset Password"}</title></Helmet> 
      </div>
    )
  }

export default Password_Recovery