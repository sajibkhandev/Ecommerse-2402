import React from 'react';

const Button = ({ text, className = '' }) => {
  return (
    <button
      className={`w-[200px] border border-transparent bg-[#262626] py-4 font-dm text-base font-bold text-white duration-300 hover:border-[#262626] hover:bg-transparent hover:text-[#262626] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
