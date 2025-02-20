import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Image from '../components/Image'
import IconOne from '../../public/iconOne.png'
import IconTwo from '../../public/iconTwo.png'


const Shop = () => {
  return (
   <section className='py-[140px]'>
    <Container>
      <Flex>
        <div className='w-3/12'>Shop by Category</div>
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