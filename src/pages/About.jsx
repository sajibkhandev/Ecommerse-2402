import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product1 from '../assets/product1.png'
import Product11 from '../assets/product11.png'
import Button from './../components/Button';
import CommonHeading from '../components/CommonHeading'
import ArrowPages from '../components/ArrowPages'
import Image from '../components/Image'

const About = () => {
  return (
    <section className='pt-[120px]'>
      <Container>
        <CommonHeading className='pt-5' text='About'/>
        <ArrowPages prevPage='Home' nextPage='About'/>
        <Flex className='pt-[136px] pb-[128px] gap-x-6'>
          <div className="w-[50%] relative ">
            <div className='w-[827px] h-[827px] flex flex-col items-center -ml-6'>
              <Image className='[780px] h-[780px] object-cover' src={Product1}/>
              <Button className='absolute mt-[83%]' text='Our Brands'/>
            </div>
          </div>
          <div className="w-[50%] relative ">
            <div className='w-[827px] h-[827px] flex flex-col items-center -ml-6'>
              <Image className='[780px] h-[780px] object-cover' src={Product11}/>
              <Button className='absolute mt-[83%]' text='Our Brands'/>
            </div>
          </div>

        </Flex>
        <CommonHeading className='font-normal pb-[118px]' text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized
          for celebrating the essence of classic Worldwide cool looking style.'/>
        <Flex className='pb-[130px]'>
          <div className="w-4/12">
            <h3 className='font-dm font-bold text-[25px]'>Our Vision</h3>
            <p className='font-dm font-normal text-[#767676] text-base leading-6 pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-4/12">
            <h3 className='font-dm font-bold text-[25px]'>Our Vision</h3>
            <p className='font-dm font-normal text-[#767676] text-base leading-6 pt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam iusto, 
            et voluptates blanditiis aliquam eveniet iure, quaerat mollitia debitis iste quia 
            saepe totam! Tempore ad voluptatum culpa praesentium obcaecati magnam cumque quod quia nobis, 
            modi error sapiente voluptatibus sequi repudiandae architecto omnis dicta ut quisquam. </p>
          </div>
          <div className="w-4/12">
            <h3 className='font-dm font-bold text-[25px]'>Our Vision</h3>
            <p className='font-dm font-normal text-[#767676] text-base leading-6 pt-4'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

        </Flex>
      </Container>
    </section>
  )
}

export default About