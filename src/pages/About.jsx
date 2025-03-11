import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import CartCard from '../components/CartCard'
import React, { useEffect, useState } from 'react'
import { counter } from '../slices/counterSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'


const About = () => {
  let [allProduct,setAllProduct]=useState([])

  useEffect(()=>{

      async function allData(){
      let data=await axios.get('https://dummyjson.com/products')
      setAllProduct(data.data.products);
     }

     allData()
    

  },[])



  allProduct.map(item=>{
    console.log(item);
    
  })







 
 
  
 
  return (
    <Container className='py-10'>

      {
        allProduct.map(item=>(
          <CartCard title={item.title} price={item.price} image={item.thumbnail}/>
        ))
      }


     

    </Container>
  )
}

export default About