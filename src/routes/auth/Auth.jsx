import React from 'react'
import "./Auth.scss"
import { NavLink, Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='auth'>
        <Outlet/>
    </div>
  )
}

export default Auth