import React from 'react'

const List = ({text,className}) => {
  return (
    
    <li className={`text-secondary text-sm font-normal font-dm hover:text-primary hover:font-bold duration-300 cursor-pointer ${className}`}>{text}</li>
    
  )
}

export default List