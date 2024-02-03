import React from 'react';

const Reset_Password = () => {
  return (
    <div className='w-[100%] h-auto p-4 overflow-auto flex items-center justify-center'>
      <div className='w-[100%] h-auto overflow-auto'>
        <div className='w-[94%] h-auto float-left overflow-auto'>
          <p className='w-[100%] h-auto text-lg text-center font-bold underline underline-offset-4 my-2'>Reset Password</p>
          <p className='w-[100%] h-auto text-sm text-center mb-4'>Enter new password over here!</p>
        </div>
        <div className='w-[94%] h-auto float-left overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-xs' htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' placeholder='Password' className='w-[100%] h-auto px-4 py-1 text-sm border border-gray-300 outline-none rounded-lg' required/>
        </div>
        <div className='w-[94%] h-auto float-left overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-xs' htmlFor='confirmPassword'>Confirm Password:</label>
          <input type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' className='w-[100%] h-auto px-4 py-1 text-sm border border-gray-300 outline-none rounded-lg' required/>
        </div>
        <div className='w-[94%] h-auto float-left overflow-auto flex items-center justify-center my-4'>
        <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Reset_Password