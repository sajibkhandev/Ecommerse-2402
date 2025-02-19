import React from 'react';
import Container from '../components/Container';
import SignUpForm from '../components/SignUpForm';
import ArrowPages from '../components/ArrowPages';
import CommonHeading from '../components/CommonHeading';
import Button from './../components/Button';
import Image from '../components/Image';
import Location from '../assets/location.png'

const Contacts = () => {
  return (
    <section>
      <Container>
        <CommonHeading className='pt-5' text='Contacts'/>
        <ArrowPages prevPage='Home' nextPage='Contacts'/>
        <h5 className='text-[39px] text-primary font-dm font-bold pb-10'>Fill up a Form</h5>
        <div className="">
          <SignUpForm className="!pb-5 !-mt-2" formTitle='Name' formText='Your name here'/>
          <SignUpForm className="!pb-5 !-mt-2" formTitle='Email' formText='Your email here'/>
          <SignUpForm className="!pb-5 !-mt-2 border-none" formTitle='Message' formText='Your message here'/>
        </div>
        <div className='w-5/12 border-b-[2px] border-[#F0F0F0] py-7 mb-10'></div>
        <div className="pb-48">
          <Button text='Post'/>
        </div>
        <div className="pb-36">
          <Image className='w-full h-[572px]' src={Location}/>
          
        </div>
      </Container>
    </section>
  );
}

export default Contacts;