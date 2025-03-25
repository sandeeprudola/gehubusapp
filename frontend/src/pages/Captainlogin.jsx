import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email,setEmail]= useState('')
      const [password, setPassword] = useState('')
      const [captainData, setcaptainData] = useState('')
  
      const submitHandler=(e)=>{
          e.preventDefault()
          setcaptainData({
              email:email,
              password:password
          })
          setEmail('')
          setPassword('')
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
    <div>
    <img className='w-16 mb-10' src="https://banner2.cleanpng.com/lnd/20241123/xu/01a0c7a4bc31fd14d50f86a45d55c0.webp" alt="" />

<form onSubmit={(e)=>{
submitHandler(e)
}}>
<h3 className='text-lg font-medium mb-2'>Your Email</h3>
<input 
 required
 value={email}
 onChange={(e)=>{
    setEmail(e.target.value)
 }}
 className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
 type='email' 
 placeholder='email@example.com'
 />


<h3 className='text-lg font-medium mb-2'>Your Password</h3>

<input 
 required
 value={password}
 onChange={(e)=>{
    setPassword(e.target.value)
 }}
 type='password'
 className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
 placeholder='password'
 />


<button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
<p className='text-center'>Join as a Captain?  <Link to='/captainsignup' className='text-blue-600'>Create new Account</Link></p>
</form>
    </div>
    <div>
         <Link to="/UserLogin" className='bg-[#4F1C51] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
    </div>
</div>
  )
}

export default Captainlogin