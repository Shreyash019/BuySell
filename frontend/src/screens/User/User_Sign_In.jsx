import React from 'react'

const User_Sign_In = () => {
  return (
    <div>
      <div>
        <h1 className="w-[100%] h-auto text-sm font-bold underline underline-offset-4 text-center mb-4">Sign In.</h1>
        <form className='w-[90%] h-auto mx-[5%]'>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='username' className='w-full h-a float-leftuto text-sm'>Email / Username:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='text' id='username' name='username' placeholder='Email / Username' required autoComplete='off' />
          </div>
          <div className='w-[100%] h-auto float-left mb-2'>
            <label htmlFor='password' className='w-full h-a float-leftuto text-sm'>Password:</label>
            <input className='w-full h-auto float-left border border-gray rounded-lg my-1 px-4 py-1 text-sm outline-none' type='password' id='password' name='password' placeholder='Password' required autoComplete='off' />
          </div>

          <div className='w-[100%] h-auto float-left my-2 flex items-center justify-center'>
            <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl'>Sign In</button>
          </div>

          <div className='w-[100%] h-auto float-left my-4 flex items-center justify-center'>
            <p className='text-xs'>Forgot Password? <i className='underline text-blue-800'></i></p>
          </div>

          <div className='w-[100%] h-auto float-left mb-2 flex items-center justify-center'>
            <p className='text-xs'>Don't have an account? <i className='underline text-blue-800'>Sign UP</i></p>
          </div>

        </form>

      </div>
    </div>
  )
}

export default User_Sign_In