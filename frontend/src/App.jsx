import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import UserSignup from './pages/UserSignup'
import Start from './pages/Start'


const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Userlogin" element={<UserLogin />} />
        <Route path='/Usersignup' element={<UserSignup/>} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="/home" element={<Home/>} /> 
      </Routes>
    </div>
  )
}

export default App