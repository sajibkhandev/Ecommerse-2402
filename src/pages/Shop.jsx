import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'


const Shop = () => {
  return (
   <section className='py-[140px]'>
    <Container>
      <Flex>
        <div className='w-3/12'>Shop by Category</div>
        <div className='w-9/12'>
          <Pagination itemsPerPage={12} />
        </div>
        
      </Flex>
    </Container>
   </section>
  )
}

export default Shop