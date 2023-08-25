import React from 'react'

const SignupBanner = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-700 to-blue-900 flex p-16'>
        <div className='w-10/12 mt-16'>
            <div className='mb-14'>
                <p className='text-xl'>Never forget what you've seen. Save what you want to watch next.</p>
                <h1 className='font-bold text-3xl'>Start tracking your anime today.</h1>
            </div>
            <div>
                <img src="https://cdn.myanimelist.net/images/top_signup/bubbles.png" alt="" />
            </div>
        </div>
        <div className="signup font-bold h-fit w-fit justify-center items-center  flex flex-col p-4 bg-sky-700 ">
            <button className='bg-black hover:opacity-80 rounded w-60 font-bold py-2 my-1 px-4'>Sign up with Apple </button>
            <button className='bg-white text-black hover:opacity-80 rounded w-60 font-bold py-2 my-1 px-4'>Sign up with Google</button>
            <button className='bg-blue-800 hover:opacity-80 rounded w-60 font-bold py-2 my-1 px-4'>Sign up with Facebook</button>
            <button className='bg-sky-500 hover:opacity-80 rounded w-60 font-bold py-2 my-1 px-4'>Sign up with Twitter</button>
            <p className='my-4'>_________________or_________________</p>
            <a className='border-b' href="">Sign up with Email</a>
        </div>
    </div>
  )
}

export default SignupBanner
