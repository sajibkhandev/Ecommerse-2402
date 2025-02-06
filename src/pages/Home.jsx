import React from 'react'

import Image from '../components/Image'

import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import Footer from '../layouts/Footer'

import BannerImage from '../assets/banner.jpg'
import Warrenty1 from '../assets/warrenty1.png'
import Warrenty2 from '../assets/warrenty2.png'
import Warrenty3 from '../assets/warrenty3.png'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Flex from '../components/Flex'


const Home = () => {
  return (
  <>
  <Navber/>
  <Sideber/>
  <Link to='/#'><Image className='w-full' src={BannerImage}/>
  <Container>
    <Flex className='py-8 justify-between'>
      <Flex className='gap-x-8'>
        <Image src={Warrenty1}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
      </Flex>
      <Flex className='gap-x-8'>
        <Image src={Warrenty2}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
      </Flex>
      <Flex className='gap-x-8'>
        <Image src={Warrenty3}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
      </Flex>
     

    </Flex>
  </Container>
  </Link>
  <Footer/>
  </>
  )
}

export default Home