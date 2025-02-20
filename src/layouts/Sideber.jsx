import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideBerIcon from '../assets/sideberIcon.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Sideber = () => {
  return (
    <section className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12'>
                <Flex className='items-center gap-x-3'>
                <Image src={SideBerIcon}/>
                <p className='text-sm text-primary font-dm font-normal'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-6/12'>
                <div className='w-full bg-white relative'>
                <input className='w-full border-0 py-4 px-5 placeholder:text-sm placeholder:text-[#C4C4C4]' type="text"  placeholder='Search Products' />
                <IoSearch  className='absolute top-1/2 right-[17px] -translate-y-1/2'/>
                </div>
                </div>
                <div className='w-4/12'>
                <Flex className='gap-x-10 items-center justify-end'>
                <Flex className='gap-x-2.5'>

                <Link to="/myaccount"><FaUser /></Link> 
                <TiArrowSortedDown />
                </Flex>
                <FaShoppingCart className='text-xl' />
                </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber