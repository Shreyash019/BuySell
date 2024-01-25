import React from 'react';
import Header from '../Navigations/Header';
import HomeScreen from './HomeScreen';
import ProductScreen from '../Product/Available_Products';
import SingleProduct from '../Product/Single_Product';
import MyProducts from '../Product/User_My_Product';
import SoldProducts from '../Product/User_Sold_Products';
import BoughtProducts from '../Product/User_Bought_Products';
import AllOrders from '../Orders/All_Orders';
import Footer from '../Navigations/Footer';
import Authenticarion from '../User/Authenticarion';


const Entry_Screen = () => {
  return (
    <>
      <Header />
      <Authenticarion/>
      <HomeScreen />
      <ProductScreen/>
      <SingleProduct/>
      <MyProducts/>
      <SoldProducts/>
      <BoughtProducts/>
      <AllOrders/>
      <Footer/>
    </>

  )
}

export default Entry_Screen