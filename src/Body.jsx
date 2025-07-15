import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './commonComponents/Navbar'

const Body = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Body