import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SideBerIcon from '../assets/sideberIcon.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '../slices/cartSlice'

const Sideber = () => {
  let dispatch=useDispatch()

  let cart=useSelector(state=>state.addtocart.cartItem)

  let [show,setShow]=useState(false)
  let handleCart=()=>{
    setShow(!show)
  }

  let hanldeIncrement=(item)=>{
    dispatch(increment(item))
    
  }
  let hanldeDecrement=(item)=>{
    dispatch(decrement(item))
    
  }

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

                <IoSearch   className='absolute top-1/2 right-[17px] -translate-y-1/2'/>
                </div>
                </div>
                <div className='w-4/12'>
                <Flex className='gap-x-10 items-center justify-end'>
                <Flex className='gap-x-2.5'>

                <Link to="/myaccount"><FaUser /></Link> 
                <TiArrowSortedDown />
                </Flex>
                <FaShoppingCart className='text-xl' onClick={handleCart} />
                </Flex>
                {
                  show  && <div className='w-1/3 h-screen bg-black absolute top-0 right-0'>
                     <FaShoppingCart className='text-xl text-red-500' onClick={handleCart} />

                     <ul className='flex justify-between bg-white py-10 px-5 text-lg'>
                      <li>Product:</li>
                      <li>Price:</li>
                      <li>Quantity:</li>
                      <li>Subtotal:</li>
                     </ul>

                     {
                      cart.map((item,index)=>(
                        <ul className='flex justify-between bg-black py-10 px-5 text-lg text-white border-b border-white'>
                          <li>{item.title}</li>
                          <li>{item.price}</li>
                          <li className=' border border-white py-1 px-6'><button className='pr-4' onClick={()=>{hanldeDecrement(item)}}>-</button><span>{item.quantity}</span><button className='pl-4' onClick={()=>{hanldeIncrement(item)}}>+</button></li>
                          <li>{item.price*item.quantity}</li>
                        </ul>
                      ))
                     }

                     




                  </div>
                  
                }
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber