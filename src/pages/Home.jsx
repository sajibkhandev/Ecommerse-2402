import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.jpg'
import Product from '../assets/product1.jpg'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'
import Product5 from '../assets/product5.png'
import Product6 from '../assets/product6.png'
import Product7 from '../assets/product7.png'
import Product8 from '../assets/product8.png'
import Product9 from '../assets/product9.png'
import Product10 from '../assets/product10.png'
import Product11 from '../assets/product11.png'
import Product12 from '../assets/product12.png'




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
import {counter} from '../slices/counterSlice'
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
        let data=await axios.get('https://dummyjson.com/products')
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
    <Flex className='pt-[174px] pb-[128px]'>
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
  <CommonHeading className='pb-12' text="New Arrivals"/>
  </Container>
{/* Slick Slider Start */}
   <Container>
   <Slider {...settings}>
  
   {
    allProduct.map(item=>(
            
      <CartCard title={item.title} price={item.price} image={item.thumbnail}/>
  ))
   }
     
      
    </Slider>
   </Container>
{/* Slick Slider end */}
 
  </section>

  <section className='pb-20'>
  <Container>
    <Flex className='flex-wrap gap-x-10'>
    {
      allProduct.map(item=>(
        <CartCard title={item.title} price={item.price} image={item.thumbnail}/>
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
    <Flex className='flex-wrap gap-x-10'>
    {
      allProduct.map(item=>(
        <CartCard title={item.title} price={item.price} image={item.thumbnail}/>
      ))
    }
    </Flex>
  </Container>
  </section>
  
 
  </>
  )
}

export default Home