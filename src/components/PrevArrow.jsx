import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const PrevArrow = ({className,onClick}) => {
  return (
    <div onClick={onClick} className={`${className} absolute top-1/2  left-0 z-20 -translate-y-[90px] flex justify-center items-center bg-[#979797] w-[64px] h-[64px] rounded-full inline-block`}>
        <FaLongArrowAltLeft className='text-white text-xl'/>
    </div>
  )
}

export default PrevArrow