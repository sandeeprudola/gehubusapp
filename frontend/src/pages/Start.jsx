import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className=' bg-cover bg-bottom bg-custom h-screen pt-8 flex w-full justify-between flex-col bg-red-400 '>
            <img className='w-16 ml-8' src="https://banner2.cleanpng.com/lnd/20241123/xu/01a0c7a4bc31fd14d50f86a45d55c0.webp" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl'>Welcome to Graphic Bus</h2>
                <Link to='/Userlogin' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start