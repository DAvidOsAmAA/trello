import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Register from '../Register/Register'
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container width: 100%; m-0 p-0">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
