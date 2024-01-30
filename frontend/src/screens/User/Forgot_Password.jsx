import React, { useEffect, useState } from 'react'

const Forgot_Password = ({handleForgotSubmit}) => {

  const [mailSent, setMailSent] = useState(false); 

  const forgotPasswordSubmit = () => {
    handleForgotSubmit('em')
  }

  const handleMailSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setMailSent(true)
    }, 500)
  }

  useEffect(() => {
  }, [mailSent])
  return (
    <div className='w-[100%] h-auto overflow-auto float-left p-4 flex items-center justify-center'>
      <div className='w-[94%] h-auto overflow-auto'>
        <div className='w-[100%] h-auto overflow-auto mb-4'>
          <p className='text-center text-lg font-bold underline underline-offset-4'>Forgot Password</p>
        </div>
        <div className='w-[100%] h-auto overflow-auto mb-4'>
          <label className='w-[100%] h-auto float-left my-1 text-sm' htmlFor='email'>Email:</label>
          <input className='w-[100%] h-auto float-left px-4 py-1 text-sm border border-gray-400 outline-none rounded-lg' type='email' id='email' name='email' placeholder='Email' required />
        </div>

        <div className='w-[100%] h-auto overflow-auto my-4 flex items-center justify-center'>
          {mailSent
            ?
            <div className='w-full h-auto flex items-center justify-center mt-6'>
              <p className='text-sm font-semibold underline underline-offset-2'>Enter OTP here to procceed:</p>
            </div>
            : <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl' onClick={handleMailSubmit}>Submit</button>
          }

        </div>

        <div className='w-[100%] min-h-[6rem] h-auto float-left overflow-auto'>
          {mailSent
            ?
            <>
              <div className='flex items-center justify-center'>
                <input className='w-[30%] h-auto float-left px-4 py-1 text-center text-sm border border-gray-400 outline-none rounded-lg' minLength='5' maxLength='5' type='text' name='otp' placeholder='OTP' required />
              </div>
              <div className='w-[100%] h-auto overflow-auto my-4 flex items-center justify-center'>
                <button className='px-4 py-1 text-sm text-white font-semibold bg-black border border-sideNav hover:border-borderColor rounded-xl' onClick={forgotPasswordSubmit}>Submit</button>
              </div>
            </>
            : <></>
          }
        </div>

      </div>
    </div>
  )
}

export default Forgot_Password