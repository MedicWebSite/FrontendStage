import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from './login/Login'
import SignUp from './sign-up/SignUp'
import Auth from '../pages/auth/Auth'

const RoutController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='auth' element={<Auth />}>
        <Route index path='login' element={<Login />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default RoutController