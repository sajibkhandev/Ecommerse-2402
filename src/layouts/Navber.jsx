import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breads } from '../slices/breadCrumbs'

const Navber = () => {
  let dispatch=useDispatch()


  let hendleBreadCrumb=(name)=>{
    dispatch(breads(name))
    
    
  }
  return (
    <nav className='bg-white py-8 '>
      <Container>
        <Flex>
          <div className='w-[38.4%]'>
          <Image src={Logo}/>
          </div>
          <div className='w-7/12'>

          <ul className='flex gap-x-10'>
           <Link onClick={()=>hendleBreadCrumb("Home")} to='/'> <List text="Home"/></Link>
            <Link onClick={()=>hendleBreadCrumb("Shop")} to='/shop'><List text="Shop"/></Link>
            <Link onClick={()=>hendleBreadCrumb("About")} to='/about'><List text="About"/></Link>
            <Link onClick={()=>hendleBreadCrumb("Contact")} to='/contacts'><List text="Contacts"/></Link>
            <Link onClick={()=>hendleBreadCrumb("Journal")} to=''><List text="Journal"/></Link>
          </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber