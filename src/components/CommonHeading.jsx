import React from 'react'

const CommonHeading = ({text,className}) => {
  return (
    <h2 className={`text-[39px] text-[#262626] font-bold font-dm ${className}`}>{text}</h2>
  )
}

export default CommonHeading