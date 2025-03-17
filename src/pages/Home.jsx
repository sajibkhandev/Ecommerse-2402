import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.jpg'



import Warrenty1 from '../assets/warrenty1.png'
import Warrenty2 from '../assets/warrenty2.png'
import Warrenty3 from '../assets/warrenty3.png'
import PomotionOne from '../assets/Ad_1.jpg'
import PomotionTwo from '../assets/Ad_2.jpg'
import PomotionThree from '../assets/Ad_3.png'
import OfferImage from '../assets/offer.jpg'
import CommonHeading from '../components/CommonHeading'
import CartCard  from '../components/CartCard'


import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'



const Home = () => {
  let [allProduct,setAllProduct]=useState([])
  let data2=useSelector(state=>state.counterFuntion.value)
  let dispatch=useDispatch()

  var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow/>

  };

  useEffect(()=>{
        async function allData(){
        let data=await axios.get('https://dummyjson.com/products/?skip=50&limit=4')
        setAllProduct(data.data.products);
       }
       allData()
    },[])









  return (
  <>
 
  <section >
    <Image className='mx-auto'  src={BannerImage}/>
  </section>
  <section className='border-b border-[#F0F0F0]'>
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
  </section>

  <Container>
    <Flex className='pt-[140px] pb-[128px]'>
    <div className='w-1/2'>
    <div className='w-[780px] h-[780px]'>
        <Image className='w-full' src={PomotionOne}/>
      </div>
    </div>
    <div className='w-1/2'>
      <Flex className='flex-col gap-y-10'>
      <div className='w-[784px] h-[370px]'>
        <Image className='w-full' src={PomotionTwo}/>
      </div>
      <div className='w-[784px] h-[370px]'>
        <Image className='w-full' src={PomotionThree}/>
      </div>
      </Flex>
    </div>
    </Flex>
  </Container>

  

  <section className='pb-20'>
  <Container>
  </Container>
{/* Slick Slider Start */}
   <Container>
  <CommonHeading className='pb-12' text="New Arrivals"/>
   <Slider {...settings}>
  
   {
    allProduct.map((item ,index)=>(
            
      <CartCard key={index} title={item.title} price={item.price} image={item.thumbnail}/>
  ))
   }
     
      
    </Slider>
   </Container>
{/* Slick Slider end */}
 
  </section>

  <section className='pb-20'>

  <Container>
  <CommonHeading className='pb-12' text="Our Bestsellers"/>
    <Flex className='flex-wrap gap-x-10'>
    {
      allProduct.map((item,index)=>(
        <CartCard key={index} title={item.title} price={item.price} image={item.thumbnail}/>
      ))
    }
    </Flex>
  </Container>

  </section>

  <Container>
    <Image className='pb-20' src={OfferImage}/>
  </Container>

  <section className='pb-20'>
  <Container>
  <CommonHeading className='pb-12' text="Special Offers"/>
    <Flex className='flex-wrap gap-x-10'>
    {
      allProduct.map((item,index)=>(
        <CartCard key={index} title={item.title} price={item.price} image={item.thumbnail}/>
      ))
    }
    </Flex>
  </Container>
  </section>
  
 
  </>
  )
}

export default Home