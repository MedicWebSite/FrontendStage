import React from 'react'
import Home from '../pages/home/Home'
import Login from './auth/login/Login'
import SignUp from './auth/sign-up/SignUp'
import Auth from '../routes/auth/Auth'
import { Route, Routes } from 'react-router-dom'
import Category from '../pages/category/Category'
import User from '../pages/user/User'
import About from './about/About'
import Service from './nav-service/Service'
import Article from './article/Article'
import ContactUs from './contact-us/ContactUs'
import DoctorList from './doctor-list/DoctorList'

const RoutController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='doctor-list' element={<DoctorList/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/article' element={<Article/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='auth' element={<Auth />}>
        <Route path='sign-up' element={<SignUp />} />
        <Route index path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default RoutController