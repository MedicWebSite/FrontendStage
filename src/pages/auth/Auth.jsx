import React from 'react'
import "./Auth.scss"
import { Outlet } from 'react-router-dom'
const Auth = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Auth