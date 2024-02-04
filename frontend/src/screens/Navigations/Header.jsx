import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CgMenuRound, CgProfile } from "react-icons/cg";
import { IoMdCloseCircleOutline, IoIosHelpCircleOutline } from "react-icons/io";
import { RiLockPasswordLine, RiCustomerService2Line } from "react-icons/ri";
import { IoListCircleOutline, IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { LuShoppingBag, LuClipboardList } from "react-icons/lu";
import { MdOutlineSell, MdOutlinePrivacyTip } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";


const Header = () => {

  const navigate = useNavigate()
  const [navActive, setNavActive] = useState(false);
  let cart = undefined;

  const handleSideNavNavigation = (navPath) => {
    switch (navPath) {
      case "home":
        setNavActive(false);
        navigate('/')
        break;

      case "allproducts":
        setNavActive(false);
        navigate('allproducts');
        break;

      case "myproducts":
        setNavActive(false);
        navigate('myproducts');
        break;

      case "soldproducts":
        setNavActive(false);
        navigate('soldproducts');
        break;

      case "boughtproducts":
        setNavActive(false);
        navigate('boughtproducts');
        break;

      case "allOrders":
        setNavActive(false);
        navigate('allOrders');
        break;

      case "alltransactions":
        setNavActive(false);
        navigate('alltransactions');
        break;

      case "termcondition":
        setNavActive(false);
        navigate('termcondition');
        break;

      case "privacypolicy":
        setNavActive(false);
        navigate('privacypolicy');
        break;

      case "help":
        setNavActive(false);
        navigate('help');
        break;

      case "contact":
        setNavActive(false);
        navigate('contact');
        break;

      case "profile":
        setNavActive(false);
        navigate('profile');
        break;

      case "passwordchange":
        setNavActive(false);
        navigate('passwordchange');
        break;

      case "auth":
        setNavActive(false);
        navigate('auth');
        break;

      case "usercart":
        setNavActive(false);
        navigate('/usercart');
        break;

      default:
        toast.error('Navigation not exist');
        setNavActive(false);
        break;
    }
  }
  useEffect(() => { }, [navActive])
  return (
    <div className='w-[100%] h-auto overflow-auto'>
      <div className='w-[100%] h-auto overflow-auto float-left'>
        <div className='w-[100%] h-16 float-left fixed top-0 overflow-auto bg-black'>
          <div className='w-auto h-full flex items-center justify-center'>
            <div className='w-[15%] sm:w-[25%] h-auto float-left flex items-center justify-center'>
              <span className='bg-black text-white sm:text-xs rounded-full px-4 py-2 cursor-pointer' onClick={() => handleSideNavNavigation('home')}>Buy & Sell</span>
            </div>
            <div className='w-[85%] sm:w-[75%] h-auto float-left text-white flex items-center justify-end'>
              <div className='w-[100%] h-auto text-3xl font-bold px-4 flex items-center justify-end'>
                <p className='sm:text-2xl mr-8 sm:mr-4 flex items-center justify-end' onClick={() => handleSideNavNavigation('usercart')}><MdShoppingCart /><i className='text-[0.75rem] text-red'>{cart ? '' : 0}</i></p>
                {navActive ? <><IoMdCloseCircleOutline onClick={() => setNavActive(false)} /> </> : <><CgMenuRound onClick={() => setNavActive(true)} /> </>}
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] h-8 mt-16 float-left bg-subNav flex items-center justify-center'>

        </div>
        {navActive
          ?
          <div className='w-[100%] h-auto overflow-auto fixed'>
            <div className='w-[70%] md:w-[60%] sm:w-[30%] min-h-screen h-auto float-left backdrop-blur-[0.5px]'></div>
            <div className='w-[30%] md:w-[40%] sm:w-[70%] min-h-screen h-auto ml-[70%] md:ml-[60%] sm:ml-[30%] absolute bg-sideNav overflow-auto'>
              <div className='w-[100%] h-12 flex items-center justify-end px-4 text-3xl text-white'>
                <IoMdCloseCircleOutline onClick={() => setNavActive(false)} />
              </div>

              <div className='w-[100%] h-auto my-2 md:my-3 sm:my-4 px-8 sm:px-4 cursor-pointer'>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><LuShoppingBag /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('allproducts')}>All Products</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><LuShoppingBag /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('myproducts')}>My Products</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><MdOutlineSell /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('soldproducts')}>Sold Products</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><IoCartOutline /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('boughtproducts')}>Bought Products</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><IoListCircleOutline /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('allOrders')}>Orders</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><GrTransaction /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('alltransactions')}>Transactions</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><LuClipboardList /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('termcondition')}>Term & Condition</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><MdOutlinePrivacyTip /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('privacypolicy')}>Privacy Policy</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start cursor-help'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><IoIosHelpCircleOutline /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('help')}>Help</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><RiCustomerService2Line /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('contact')}>Contact</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><CgProfile /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('profile')}>Profile</p>
                </div>
                <div className='w-[100%] h-auto mb-[0.7rem] flex items-center justify-start'>
                  <p className='w-[18%] md:[13%] lg:w-[12%] text-white text-xl font-medium'><RiLockPasswordLine /></p>
                  <p className='text-white text-base font-medium' onClick={() => handleSideNavNavigation('passwordchange')}>Password Change</p>
                </div>
              </div>
              <div className='w-[100%] h-16 float-left py-4 flex items-center justify-center bottom-0 absolute'>
                <div className='w-[30%] h-auto py-2 rounded-2xl bg-black mx-4 text-white font-bold text-sm flex items-center justify-center cursor-pointer' onClick={() => handleSideNavNavigation('auth')}>Sign Up</div>
                <div className='w-[30%] h-auto py-2 rounded-2xl bg-black mx-4 text-white font-bold text-sm flex items-center justify-center cursor-pointer' onClick={() => handleSideNavNavigation('auth')}>Sign In</div>
                {/* <div className='w-auto h-auto py-1 px-4 rounded-2xl mx-4 text-white font-bold text-base border border-subNav flex items-center justify-center hover:bg-black hover:border-none'><p>Logout</p>&nbsp;<p className='text-xl'><IoLogOutOutline /></p></div> */}
              </div>
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>

  )
}

export default Header