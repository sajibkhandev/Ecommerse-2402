import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const PrevArrow = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} absolute left-0 top-1/2 z-20 flex h-[64px] w-[64px] -translate-y-[90px] items-center justify-center rounded-full bg-[#979797] transition-transform hover:bg-gray-500 active:scale-95`}
    >
      <FaLongArrowAltLeft className="text-xl text-white" />
    </div>
  );
};

export default PrevArrow;
