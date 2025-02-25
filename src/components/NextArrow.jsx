import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArrow = ({className, onClick }) => {
   
    
  return (
    <div
      className={`${className} absolute top-1/2  right-0 z-20 -translate-y-[90px] flex justify-center items-center bg-[#979797] w-[64px] h-[64px] rounded-full inline-block`}
      onClick={onClick}
    >
       <FaLongArrowAltRight className='text-white text-xl'/>
    </div>
  )
}

export default NextArrow