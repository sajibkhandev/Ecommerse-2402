import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const NextArrow = ({ className = '', onClick }) => {
  return (
    <div
      className={`${className} absolute right-0 top-1/2 z-20 flex h-[64px] w-[64px] -translate-y-[90px] items-center justify-center rounded-full bg-[#979797] transition-transform hover:bg-gray-500 active:scale-95`}
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-xl text-white" />
    </div>
  );
};

export default NextArrow;
