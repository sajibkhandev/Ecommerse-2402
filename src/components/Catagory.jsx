import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';

const Catagory = ({ catagoryText, setcurrentCategorySlug, slug, children }) => {
  const [collapse, setCollapse] = useState(true);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div className={collapse ? 'border-b' : ''}>
      <div className="flex items-center justify-between pb-4">
        <h4
          className="cursor-pointer text-base font-semibold"
          onClick={() => setcurrentCategorySlug(slug)}
        >
          {catagoryText}
        </h4>
        {children &&
          (collapse ? (
            <BsPlus onClick={handleCollapse} className="cursor-pointer" />
          ) : (
            <BsDash onClick={handleCollapse} className="cursor-pointer" />
          ))}
      </div>

      {children && !collapse && (
        <div className="flex flex-col gap-y-3 pl-4">{children}</div>
      )}
    </div>
  );
};

export default Catagory;
