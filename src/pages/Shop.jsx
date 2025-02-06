import React from 'react'
import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import Footer from '../layouts/Footer'

const Shop = () => {
  return (
    <div>
      <Navber/>
      <Sideber/>
      <h1 className='text-5xl text-center'>Shop page</h1>
      <Footer/>
    </div>
  )
}

export default Shop