import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className='bg-white py-8 '>
      <Container>
        <Flex>
          <div className='w-[38.4%]'>
          <Image src={Logo}/>
          </div>
          <div className='w-7/12'>

          <ul className='flex gap-x-10'>
           <Link to='/'> <List text="Home"/></Link>
            <Link to='/shop'><List text="Shop"/></Link>
            <Link to='/about'><List text="About"/></Link>
            <Link to='/contacts'><List text="Contacts"/></Link>
            <Link to='/journal'><List text="Journal"/></Link>
          </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber