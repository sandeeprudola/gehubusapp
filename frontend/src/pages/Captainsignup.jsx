import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {
const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('') 
  const [lastName, setlastName] = useState('')
  const [userData, setuserData] = useState({})


  const submitHandler=(e)=>{
    e.preventDefault()
    setuserData({
      username:{
        email:email,
        password:password,
      },
      firstName:firstName,
      lastName:lastName
    })
    console.log(userData)
    setEmail('')
    setPassword('')
    setfirstName('')
    setlastName('')
  }



  return (
       <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
        <img className='w-16 mb-10' src="https://banner2.cleanpng.com/lnd/20241123/xu/01a0c7a4bc31fd14d50f86a45d55c0.webp" alt="" />

<form onSubmit={(e)=>{
    submitHandler(e)
}}>
  <h3 className='text-base font-medium mb-2'>What's Your Name</h3>
  <div className='flex gap-3 mb-5'>

    <input 
     required
     className='bg-[#eeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
     type='text' 
     placeholder='First Name'
     value={firstName}
     onChange={(e)=>{
        setfirstName(e.target.value)
     }}
     />
  <input 
     required
     type='text'
     className='bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
     placeholder='Last Name'
     value={lastName}
     onChange={(e)=>{
        setlastName(e.target.value)
     }}
     />
  </div>
  <h3 className='text-base font-medium mb-2'>What's Your Email</h3>
  <input 
     required
     className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     type='email' 
     value={email}
     onChange={(e)=>{
        setEmail(e.target.value)
     }}
     placeholder='email@example.com'
     />


  <h3 className='text-base font-medium mb-2'>What's Your Email</h3>
  <input 
     required
     value={password}
     onChange={(e)=>{
        setPassword(e.target.value)
     }}
     className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     type='password' 
     placeholder='password'
     />
    
 

    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
    
</form>
<p className='text-center'>Already have a account? <Link to='/captainlogin' className='text-blue-600'>login here</Link></p>
</div>
        
    </div>
  )
}

export default Captainsignup