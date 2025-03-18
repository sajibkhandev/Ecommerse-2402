import React from 'react';

const CommonHeading = ({ text, className = '' }) => {
  return (
    <h2 className={`font-dm text-[49px] font-bold text-[#262626] ${className}`}>
      {text}
    </h2>
  );
};

export default CommonHeading;
