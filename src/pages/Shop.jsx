import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Image from '../components/Image'
import IconOne from '../../public/iconOne.png'
import IconTwo from '../../public/iconTwo.png'

import { LuPlus } from 'react-icons/lu'
import Catagory from '../components/Catagory'


const Shop = () => {
  let [show,setShow]=useState(false)
  let handleCatagoryOne=()=>{
    setShow(!show)
    
  }
  return (
   <section className='py-[140px]'>
    <Container>
      <Flex >
        <div className='w-3/12 pr-10'>
        <h3 className='text-xl text-[#262626] font-dm font-bold'>Shop by Category</h3>
        <div className='py-9'>
          <div onClick={handleCatagoryOne}><Catagory type="havebutton" catagoryText="Category 1"/>
          {
            show && <div className=' pl-14'>
            <Catagory  catagoryText="Phone"/>
            <Catagory  catagoryText="Desktop"/>
            <Catagory  catagoryText="Watch"/>
            <Catagory  catagoryText="Phone"/>
            </div>
          }
          </div>
          <Catagory catagoryText="Category 2"/>
          <Catagory type="havebutton" catagoryText="Category 3"/>
          <Catagory catagoryText="Category 4"/>
          <Catagory catagoryText="Category 5"/>
          
        </div>
        </div>
        <div className='w-9/12'>
        <Flex className='justify-between pb-[60px]'>
          <div className='flex gap-x-5'>
            <Image src={IconOne}/>
            <Image src={IconTwo}/>
          </div>
          <Flex className='gap-x-10'>
            <div className='flex gap-x-4 items-center'>
              <h5>Sort by:</h5>
              <select className='py-2 px-5 border-[#F0F0F0] border'>
                <option value="">Featured</option>
                <option value="">color</option>
                <option value="">jaina</option>
              </select>
            </div>
            <div className='flex gap-x-4 items-center'>
              <h5>Show::</h5>
              <select className='py-2 px-5 border-[#F0F0F0] border'>
                <option value="">6</option>
                <option value="">12</option>
                <option value="">24</option>
                <option value="">36</option>
              </select>
            </div>
            </Flex>
          </Flex>
          <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
   </section>
  )
}

export default Shop