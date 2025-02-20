import React from 'react'
import Container from '../components/Container';
import Flex from './../components/Flex';
import List from './../components/List';

const MyAccount = () => {
  return (
    <section>
        <Container>
            <Flex className='py-32'>
                <div className='w-3/12'>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Dashboard'/>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Others'/>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Downloads'/>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Addresses'/>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Account details'/>
                    <List className='!text-base !hover:text-base border-b-[1px] py-10' text='Logout'/>
                </div>
                <div className='px-14 w-7/12'>
                    <p className='py-10 text-base text-[#767676]'>Hello 
                        <span className='font-dm text-base font-normal text-primary'> admin </span>(not
                        <span className='font-dm text-base font-normal text-primary'> admin</span> ? 
                        <span className='font-dm text-base font-normal text-primary'> Log out</span>)
                    </p>
                    <p className='py-7 text-base text-[#767676]'>
                    From your account dashboard you can view your 
                    <span className='font-dm text-base font-normal text-primary'> recent orders</span>,
                    manage your 
                    <span className='font-dm text-base font-normal text-primary'>shipping and billing addresses</span>, and 
                    <span className='font-dm text-base font-normal text-primary'> edit your password and account details.</span>
                    </p>
                </div>
            </Flex>

        </Container>
    </section>
  )
}

export default MyAccount