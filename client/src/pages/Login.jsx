import React from 'react'

const Login = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div>
            <h2 className='text-4xl text-center mb-4'>Login</h2>
            <form className='max-w-md mx-auto'>
                <input type="email" placeholder='you@youremail.domain' />
                <input type="password" placeholder='Enter your Password' />
                <button className='primary'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
