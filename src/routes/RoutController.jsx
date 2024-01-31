import React from 'react'
import Home from '../pages/home/Home'
import Login from './auth/login/Login'
import SignUp from './auth/sign-up/SignUp'
import Auth from '../routes/auth/Auth'
import { Route, Routes } from 'react-router-dom'

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