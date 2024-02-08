import EntryScreen from "./screens/Home/Entry_Screen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from './screens/Home/Not_Found';
import HomeScreen from './screens/Home/HomeScreen'
import Authentication from './screens/User/Authenticarion';
import ProductScreen from './screens/Product/Available_Products';
import MyProducts from './screens/Product/User_My_Product';
import SoldProducts from './screens/Product/User_Sold_Products';
import BoughtProducts from './screens/Product/User_Bought_Products';
import SingleProduct from './screens/Product/Single_Product';
import AllOrders from './screens/Orders/All_Orders';
import PasswordRecovery from './screens/User/Password_Recovery';
import PasswordUpdate from './screens/User/Password_Update';
import UserProfile from './screens/User/User_Profile';
import NewProductUpload from './screens/Product/New_Product_Upload';
import MySingleProduct from './screens/Product/My_Single_Product';
import UserCart from "./screens/Orders/User_Cart";
import PaymentPage from "./screens/Transactions/PaymentPage";
import TermCondition from "./screens/Utility/TermCondition";
import PrivacyPolicy from "./screens/Utility/PrivacyPolicy";
import HelpPage from "./screens/Utility/HelpPage";
import ContactPage from "./screens/Utility/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryScreen />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'auth', element: <Authentication /> },
      { path: 'allproducts', element: <ProductScreen /> },
      { path: 'myproducts', element: <MyProducts /> },
      { path: 'soldproducts', element: <SoldProducts /> },
      { path: 'boughtproducts', element: <BoughtProducts /> },
      { path: 'singleproduct/:id', element: <SingleProduct /> },
      { path: 'mysingleproduct', element: <MySingleProduct /> },
      { path: 'newproduct', element: <NewProductUpload /> },
      { path: 'allorders', element: <AllOrders /> },
      { path: 'usercart', element: <UserCart/>},
      { path: 'passwordrecovery', element: <PasswordRecovery /> },
      { path: 'passwordchange', element: <PasswordUpdate /> },
      { path: 'profile', element: <UserProfile /> },
      { path: 'payment', element: <PaymentPage/>},
      { path: 'termcondition', element: <TermCondition/>},
      { path: 'privacypolicy', element: <PrivacyPolicy /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'contact', element: <ContactPage /> },

    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
