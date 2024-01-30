import React from 'react'

const User_Sign_Up = () => {
  return (
    <div>
      <div>
        <h1 className="w-[100%] h-auto text-sm font-bold underline underline-offset-4 text-center mb-4">Create your account.</h1>
        <form className='w-[90%] h-auto mx-[5%]'>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='username' className='w-full h-a float-leftuto text-sm'>Username:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='text' id='username' name='username' placeholder='Username' required autoComplete='off' />
          </div>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='email' className='w-auto h-auto float-left text-sm'>Email Address:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='email' id='email' name='email' placeholder='Email' required autoComplete='off' />
          </div>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='password' className='w-full h-a float-leftuto text-sm'>Password:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='password' id='password' name='password' placeholder='Password' required autoComplete='off' />
          </div>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='confirm_Password' className='w-auto h-auto float-left text-sm'>Confirm Password:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='password' id='confirm_Password' name='confirm_Password' placeholder='Confirm Password' required autoComplete='off' />
          </div>

          <div className='w-[100%] h-auto float-left my-2 flex items-center justify-center'>
            <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl'>Register</button>
          </div>

          <div className='w-[100%] h-auto float-left mb-2 flex items-center justify-center'>
            <p className='text-xs'>Already have an account? <i className='underline text-blue-800'>Sign In</i></p>
          </div>

        </form>

      </div>
    </div>
  )
}

export default User_Sign_Up