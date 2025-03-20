import { useState } from 'react';
import Container from '../components/Container'
import Devision from '../devision';

const About = () => {
  let [devision,setDevision]=useState(Devision)
  let [storeDevision,setStoreDevision]=useState('')

  let handleDevision=(e)=>{
    if(e.target.value!="Select Devision"){
      setStoreDevision(e.target.value);
    }
    
  }
  let handleChange=(e)=>{
    console.log(e.target.value);
    

  }
  
 
  return (
    <Container className="py-10">

      <select onChange={handleDevision}>
        <option >Select Devision</option>
        {
          devision.map(item=>(
            <option >{item.devision}</option>
          ))

        }
        
      </select>
     
      <select onChange={handleChange}>
        <option >Select Distrct</option>
        {
          devision.map(item=>(
            item.devision == storeDevision &&
            
            item.district.map(item2=>(
              <option>{item2.name}</option>
            ))
            
          ))

        }
      </select>
     
     
    </Container>
  );
};

export default About;
