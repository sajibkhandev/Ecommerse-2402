import React from 'react'
import Navber from './Navber'
import Sideber from './Sideber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <>
    <Navber/>
    <Sideber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayouts