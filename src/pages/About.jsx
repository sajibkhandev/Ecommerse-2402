import { useState } from 'react';
import Container from '../components/Container'
import Devision from '../devision';

const About = () => {
  let [devision,setDevision]=useState(Devision)
  

 

 
  return (
    <Container className="py-10">

      <select >
        <option >Select Devision</option>
        {
          devision.map(item=>(
            <option >{item.devision}</option>
          ))

        }
        
      </select>
     
      <select >
        <option >Select Distrct</option>
        {
          devision.map(item=>(
            <option >{item.devision}</option>
          ))

        }

       
      </select>
     
     
    </Container>
  );
};

export default About;
