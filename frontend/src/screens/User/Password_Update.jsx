import React from 'react'

const Password_Update = () => {
  return (
    <div className='w-[100%] min-h-screen h-auto overflow-auto flex items-center justify-center'>
      <div className='w-[40%] md:w-[60%] sm:w-[94%] h-auto overflow-auto p-4 border-2 border-borderColor shadow-lg shadow-borderColor rounded-2xl'>
        <div className='w-[90%] h-auto mx-[5%] float-left overflow-auto'>
          <p className='w-[100%] h-auto text-lg text-center font-bold underline underline-offset-4 my-2'>Change Password</p>
          <p className='w-[100%] h-auto text-sm text-center mb-4'>Change your password over here!</p>
        </div>
        <div className='w-[90%] h-auto mx-[5%] float-left overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-xs' htmlFor='oldPassword'>Old Password:</label>
          <input type='password' id='oldPassword' name='oldPassword' placeholder='Old Password' className='w-[100%] h-auto px-4 py-1 text-sm border border-gray-300 outline-none rounded-lg' required />
        </div>
        <div className='w-[90%] h-auto mx-[5%] float-left overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-xs' htmlFor='newPassword'>New Password:</label>
          <input type='password' id='newPassword' name='newPassword' placeholder='New Password' className='w-[100%] h-auto px-4 py-1 text-sm border border-gray-300 outline-none rounded-lg' required />
        </div>
        <div className='w-[90%] h-auto mx-[5%] float-left overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-xs' htmlFor='confirmPassword'>Confirm Password:</label>
          <input type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' className='w-[100%] h-auto px-4 py-1 text-sm border border-gray-300 outline-none rounded-lg' required />
        </div>
        <div className='w-[90%] h-auto mx-[5%] float-left overflow-auto flex items-center justify-center my-4'>
          <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Password_Update