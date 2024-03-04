import React from 'react'
import AdminSideBar from '../../layout/admin-sidebar/AdminSideBar'
import "./Admin.scss"
import { Outlet } from 'react-router'

const Admin = () => {
  return (
    <div className='admin-wrapper'>
        <AdminSideBar/>
        <main className='admin-main'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Admin