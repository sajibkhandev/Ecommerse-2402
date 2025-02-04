import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'

const Navber = () => {
  return (
    <nav className='bg-white py-8 '>
      <Container>
        <Flex>
          <div className='w-5/12'>
          <Image src={Logo}/>
          </div>
          <div className='w-7/12'>

          <ul className='flex gap-x-10'>
            <List text="Home"/>
            <List text="Shop"/>
            <List text="About"/>
            <List text="Contacts"/>
            <List text="Journal"/>
          </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber