import React, { useEffect, useState } from 'react';
import ProfileUpdate from './User_Profile_Update';
import ShowProfile from './ShowProfile';

const User_Profile = () => {

  const [isEdit, setIsEdit] = useState(false)

  const changePasswordUpdate = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit)
  }

  useEffect(()=>{}, [isEdit])

  return (
    <div className='w-[100%] min-h-screen h-auto overflow-auto'>
      <div className='w-[80%] h-auto mx-[10%] flex items-center justify-end my-4'>
        <button className='px-4 py-1 text-sm sm:text-xs text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl' onClick={changePasswordUpdate}>{isEdit? 'Cancel' : 'Edit'}</button>
      </div>
      <div className='w-[100%] h-auto overflow-auto'>
        {isEdit ? <ProfileUpdate/> : <ShowProfile/>}
      </div>
    </div>
  )
}

export default User_Profile