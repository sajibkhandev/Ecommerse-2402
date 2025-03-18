import React from 'react';

const SignUpForm = ({ formTitle, formText, className = '' }) => {
  return (
    <div className={`w-5/12 pb-20 ${className}`}>
      <h5 className={`font-dm text-base font-bold text-primary ${className}`}>
        {formTitle}
      </h5>
      <p
        className={`mb-[30px] mt-[5px] border-b-[2px] border-[#F0F0F0] pb-5 font-dm text-[14px] font-normal text-[#767676] ${className}`}
      >
        {formText}
      </p>
    </div>
  );
};

export default SignUpForm;
