import React from 'react';
import Header from '../Navigations/Header';
import HomeScreen from './HomeScreen';
import ProductScreen from '../Product/Available_Products';
import SingleProduct from '../Product/Single_Product';
import MyProducts from '../Product/User_My_Product';
import SoldProducts from '../Product/User_Sold_Products';
import BoughtProducts from '../Product/User_Bought_Products'


const Entry_Screen = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <ProductScreen/>
      <SingleProduct/>
      <MyProducts/>
      <SoldProducts/>
      <BoughtProducts/>
    </>

  )
}

export default Entry_Screen