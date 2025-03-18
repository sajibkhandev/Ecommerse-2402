import React from 'react';

const List = ({ text, className = '' }) => {
  return (
    <li
      className={`cursor-pointer list-none font-dm text-sm font-normal text-secondary duration-300 hover:font-bold hover:text-primary ${className}`}
    >
      {text}
    </li>
  );
};

export default List;
