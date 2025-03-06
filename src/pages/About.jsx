import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import React, { useState } from 'react'
import { counter } from '../slices/counterSlice'
import { Link } from 'react-router-dom'


const About = () => {
  let data=useSelector(state=>state.counterFuntion.value)
  let dipatch=useDispatch()
  let data2=useSelector(state=>state.breadFunction.preiousValue)
 
  
 
  return (
    <Container className='py-10'>
      <h2 className='text-5xl font-bold pb-4'>About</h2>
      <div className='pb-20'>
        <p><Link to={data2=="Home"?'/':`/${data2}`}>{data2}</Link> > about</p>
      </div>
    
     <h1>counter{data}</h1>
     <button onClick={()=>dipatch(counter(10))}>Sent data</button>

    </Container>
  )
}

export default About