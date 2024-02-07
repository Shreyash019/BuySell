import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Header from '../Navigations/Header';
import Footer from '../Navigations/Footer';

const Entry_Screen = () => {

  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false)
  }, 4000)

  useEffect(() => { }, [loader])
  return (
    <div className='select-none'>
      {loader
        ?
        <div className='w-[100%] h-screen flex items-center justify-center'>
          <div className='w-[100%] h-auto p-8'>
            <p className='w-[100%] h-auto text-center my-8 text-xl font-bold'>Welcome to Buy&Sell!</p>
            <img className='w-[20%] mx-[40%] h-auto' src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjQ1a2VxenA3MDJ5dW5sY3c5YWxxYXV4ZDNpZng1ampoaXJhMmJrayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SbtWCS3C8tMUltv5gG/giphy.gif' alt='ewf' />
            <p className='w-[100%] h-auto text-center my-8 text-xl font-bold'>Loading...</p>
          </div>
        </div>
        : <><Header /><Outlet /><Footer /><Toaster /></>
      }

      <Helmet> <title>Buy&Sell</title></Helmet>
    </div>

  )
}

export default Entry_Screen;