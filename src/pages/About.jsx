import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import React, { useState } from 'react'
import { counter } from '../slices/counterSlice'


const About = () => {
  let data=useSelector(state=>state.counterFuntion.value)
  let dipatch=useDispatch()
 
  
 
  return (
    <Container className='py-10'>
    
     <h1>counter{data}</h1>
     <button onClick={()=>dipatch(counter(10))}>Sent data</button>

    </Container>
  )
}

export default About