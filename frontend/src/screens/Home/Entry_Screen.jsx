import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Header from '../Navigations/Header';
import Footer from '../Navigations/Footer';



const Entry_Screen = () => {
  return (
    <div className='select-none'>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
      <Helmet> <title>Buy&Sell</title></Helmet>

    </div>

  )
}

export default Entry_Screen;