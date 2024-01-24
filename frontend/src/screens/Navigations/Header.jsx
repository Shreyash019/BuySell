import React, { useEffect, useState } from 'react';
import { CgMenuRound, CgProfile } from "react-icons/cg";
import { IoMdCloseCircleOutline, IoIosHelpCircleOutline } from "react-icons/io";
import { RiLockPasswordLine, RiCustomerService2Line } from "react-icons/ri";
import { IoListCircleOutline, IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { LuShoppingBag, LuClipboardList } from "react-icons/lu";
import { MdOutlineSell, MdOutlinePrivacyTip } from "react-icons/md";



const Header = () => {

  const [navActive, setNavActive] = useState(false);

  useEffect(() => {

  }, [navActive])
  return (
    <div className='w-[100%] h-auto overflow-auto'>
      <div className='w-[100%] h-16 sm:h-12 float-left'>
        <div className='w-auto h-full flex items-center justify-center'>
          <div className='w-[15%] sm:w-[25%] h-auto float-left flex items-center justify-center'>
            <span className='bg-black text-white rounded-full px-4 py-2'>Buy & Sell</span>
          </div>
          <div className='w-[85%] sm:w-[75%] h-auto float-left bg-white text-black flex items-center justify-end'>
            <div className='w-[100%] h-auto text-3xl font-bold px-4 flex items-center justify-end'>
              {navActive ? <><IoMdCloseCircleOutline onClick={() => setNavActive(false)} /> </> : <><CgMenuRound onClick={() => setNavActive(true)} /> </>}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-8 float-left bg-subNav flex items-center justify-center'>

      </div>
      {navActive
        ?
        <div className='w-[100%] h-auto overflow-auto absolute'>
          <div className='w-[30%] md:w-[40%] sm:w-[70%] min-h-screen h-auto ml-[70%] md:ml-[60%] sm:ml-[30%] fixed bg-sideNav backdrop-blur-sm'>
            <div className='w-[100%] h-12 flex items-center justify-end px-4 text-3xl text-white'>
              <IoMdCloseCircleOutline onClick={() => setNavActive(false)} />
            </div>

            <div className='w-full h-auto my-2 md:my-3 sm:my-4 px-8 sm:px-4 absolute'>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><CgProfile /></p>
                <p className='text-white text-lg font-medium'>Profile</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><RiLockPasswordLine /></p>
                <p className='text-white text-lg font-medium'>Edit Password</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><IoListCircleOutline /></p>
                <p className='text-white text-lg font-medium'>Orders</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><GrTransaction /></p>
                <p className='text-white text-lg font-medium'>Transactions</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><LuShoppingBag /></p>
                <p className='text-white text-lg font-medium'>My Products</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><MdOutlineSell /></p>
                <p className='text-white text-lg font-medium'>Sold Products</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><IoCartOutline /></p>
                <p className='text-white text-lg font-medium'>Bought Products</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><LuClipboardList /></p>
                <p className='text-white text-lg font-medium'>Term & Condition</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><MdOutlinePrivacyTip /></p>
                <p className='text-white text-lg font-medium'>Privacy Policy</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><IoIosHelpCircleOutline /></p>
                <p className='text-white text-lg font-medium'>Help</p>
              </div>
              <div className='w-[100%] h-auto my-3 sm:my-4 flex items-center justify-start'>
                <p className='w-[15%] sm:w-[20%] text-white text-2xl font-medium'><RiCustomerService2Line /></p>
                <p className='text-white text-lg font-medium'>Contact</p>
              </div>
            </div>

            <div className='w-full h-16 py-4 absolute bottom-0 sm:bottom-12 flex items-center justify-center'>
              {/* <div className='w-[30%] h-auto py-2 rounded-2xl bg-black mx-4 text-white font-bold text-sm flex items-center justify-center'>Sign Up</div>
              <div className='w-[30%] h-auto py-2 rounded-2xl bg-black mx-4 text-white font-bold text-sm flex items-center justify-center'>Sign In</div> */}
              <div className='w-auto h-auto py-2 px-4 rounded-2xl mx-4 text-white font-bold text-base border border-subNav flex items-center justify-center hover:bg-black hover:border-none'><p>Logout</p>&nbsp;<p className='text-xl'><IoLogOutOutline/></p></div>
            </div>
          </div>
        </div>
        : <></>}
    </div>
  )
}

export default Header