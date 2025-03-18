import React from 'react';

const CartList = ({
  carthead,
  cartdata,
  price,
  quantity,
  total,
  subdollar,
  totaldollar,
  className = '',
}) => {
  return (
    <div>
      <h5
        className={`font-dm text-base font-semibold text-primary ${className}`}
      >
        {carthead}
      </h5>
      <p
        className={`font-dm text-base font-semibold text-primary ${className}`}
      >
        {cartdata}
      </p>
      <p className={`font-dm text-[20px] font-bold text-primary ${className}`}>
        {price}
      </p>
      <p
        className={`font-dm text-base font-semibold text-[#767676] ${className}`}
      >
        {quantity}
      </p>
      <p className={`font-dm text-[20px] font-bold text-primary ${className}`}>
        {total}
      </p>
      <p
        className={`font-dm text-base font-normal text-[#767676] ${className}`}
      >
        {subdollar}
      </p>
      <p className={`font-dm text-base font-medium text-primary ${className}`}>
        {totaldollar}
      </p>
    </div>
  );
};

export default CartList;
