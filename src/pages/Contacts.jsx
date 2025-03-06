import React from 'react';
import Container from '../components/Container';
import SignUpForm from '../components/SignUpForm';
import ArrowPages from '../components/ArrowPages';
import CommonHeading from '../components/CommonHeading';
import Button from './../components/Button';
import Image from '../components/Image';
import Location from '../assets/location.png'
import Flex from '../components/Flex';
import { FaPlus } from 'react-icons/fa';
import List from './../components/List';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Contacts = () => {
  let data2=useSelector(state=>state.breadFunction.preiousValue)
  return (
    <section>
      <Container>
      <h2 className='text-5xl font-bold pb-4'>Contact</h2>
      <div className='pb-20'>
        <p><Link to={data2=="Home"?'/':`/${data2}`}>{data2}</Link> > contact</p>
      </div>
        <h5 className='text-[39px] text-primary font-dm font-bold pt-20 pb-10'>Fill up a Form</h5>
        <div>
          <SignUpForm className="!pb-5 !-mt-2" formTitle='Name' formText='Your name here'/>
          <SignUpForm className="!pb-5 !-mt-2" formTitle='Email' formText='Your email here'/>
          <SignUpForm className="!pb-5 !-mt-2 border-none" formTitle='Message' formText='Your message here'/>
        </div>
        <div className='w-5/12 border-b-[2px] border-[#F0F0F0] py-7 mb-10'></div>
        <div className="pb-48">
          <Button text='Post'/>
        </div>
        <div className="pb-36 relative">
          <div className="absolute w-[451px] h-[412px] bg-white ml-20 mt-24">
            <Flex className='px-5 border-b-[2px] py-7 items-center justify-between'>
              <h3 className="pb-0 mt-2 border-none text-base font-bold font-dm text-primary">
              Germany Office</h3>
              <FaPlus className='text-[12px] text-primary'/>
            </Flex>
            <Flex className='px-5 border-b-[2px] py-7 items-center justify-between'>
              <h3 className="pb-0 mt-2 border-none text-base font-bold font-dm text-primary">
              Slovakia Office</h3>
              <FaPlus className='text-[12px] text-primary'/>
            </Flex>
            <Flex className='flex-col px-5 py-5 items-start justify-between'>
              <h3 className="pb-0 mt-2 border-none text-base font-bold font-dm text-primary">
              Lithuania Office
              </h3>
              <div className="pt-3">
                <List className="!leading-9 !text-base" text='575 Crescent Ave. Quakertown, PA 18951'/>
                <List className="!leading-9 !text-base" text='+432 533 12 523'/>
                <List className="!leading-9 !text-base" text='info@domain.com'/>
                <List className="!leading-9 !text-base" text='Mon - Fri: 9am - 6pm'/>
              </div>

            </Flex>
          </div>
          <Image className='w-full h-[572px]' src={Location}/>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;