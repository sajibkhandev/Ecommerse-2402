import React from 'react'
import Navber from '../layouts/Navber'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import Flex from '../components/Flex'
import { MdArrowForwardIos } from "react-icons/md";

const Checkout = () => {
  return (
    <div>
        <section className='pt-[124px] pl-[157px] pb-[170px]'>
          <Container>
            <CommonHeading text='Checkout' className='font-dm font-[700] text-[49px]'/>
            <div>
              <Flex className='items-center gap-x-1'>
                <span className='text-[12px] font-dm font-[400] text-[#6D6D60] cursor-pointer hover:text-primary'>Home</span>
                <MdArrowForwardIos className='text-[12px] font-dm font-[400] text-[#6D6D60] cursor-pointer' />
                <span className='text-[12px] font-dm font-[400] text-[#6D6D60] cursor-pointer hover:text-primary'>Checkout</span>

                
                 
              </Flex>
              <p className='font-dm text-[16px] font-[400] text-[#767676] pt-[127px]'>Have a coupon? <span className='hover:text-primary duration-75 cursor-pointer'>Click here to enter your code</span></p>

            </div>

            <div className='pt-[119px]'>
              <CommonHeading text='Billing Details' className='font-[700] text-[39px] font-dm text-primary'/>
              <form action="" className='pt-[42px]'>
                <div className='w-[1057px]'>
               <Flex className="justify-between">
                <div>
                <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>First Name *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="First Name" className='w-[508px] outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                </div>

                <div>
                <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Last Name *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Last Name" className='w-[508px] outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                </div>
               </Flex>
                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Companye Name (optional)</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Company Name" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Country *</label>
                <br />
                <select name="" id="" className='w-full font-dm font-[400] text-[14px] text-[#767676] py-4 bg-transparent border-b-2 cursor-pointer'>
                <option value="">Please select</option>
                  <option value="">Bangladesh</option>
                  <option value="">United States</option>
                  <option value="">Canada</option>
                  <option value="">United Kingdom</option>
                  <option value="">Australia</option>
                  <option value="">India</option>
                  <option value="">Brazil</option>
                  <option value="">Japan</option>
                  <option value="">Germany</option>
                </select>
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Street Address *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="House number and street name" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                <br />
                <input type="text" id="name" name="name" placeholder="Apartment, suite, unit etc. (optional)" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Town/City *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Town/City" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>County (optional)</label>
                <br />
                <input type="text" id="name" name="name" placeholder="County" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Post Code *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Post Code" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Email Address *</label>
                <br />
                <input type="email" id="name" name="name" placeholder="Email" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                
                
                </div>
              </form>
            </div>

            
          </Container>
        </section>

    </div>
  )
}

export default Checkout