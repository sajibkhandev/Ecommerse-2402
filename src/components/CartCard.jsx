

import React from 'react';
import Flex from './Flex';
import { BsArrowRepeat, BsCartPlus, BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

const CartCard = ({ title, price, discountPercentage = 'New', image }) => {

  let dispatch=useDispatch()

  let handleCart=()=>{
    dispatch(addtocart({
      title:title,
      price:price,
      image:image,
      quantity:1


    }))
    
  }
  return (
    <div className="group w-full p-4 shadow">
      <div className="relative overflow-hidden">
        <div className="absolute rounded bg-black px-6 py-2 font-dm text-white">
          {discountPercentage}
        </div>
        <img loading="lazy" src={image} className="w-full" alt="" />
        <div className="absolute -bottom-28 w-full transition-all duration-300 group-hover:bottom-0">
          <Flex className="flex-col items-end bg-white p-4">
            <Flex className="w-fit cursor-pointer items-center gap-3 transition-all duration-200 hover:font-bold">
              <h3>Add to Wish List</h3>
              <BsHeart />
            </Flex>
            <Flex className="w-fit cursor-pointer items-center gap-3 transition-all duration-200 hover:font-bold">
              <h3>Comapre</h3>
              <BsArrowRepeat />
            </Flex>
            <div onClick={handleCart} className="flex w-fit cursor-pointer items-center gap-3 transition-all duration-200 hover:font-bold">
              <h3>Add to Cart</h3>
              <BsCartPlus />
            </div>
          </Flex>
        </div>
      </div>
     <Link to={`/products/${title}`}>
        <Flex className="justify-between pb-3 pt-6">
            <h3 className="line-clamp-1 font-dm text-xl font-bold text-[#262626]">
              {title}
            </h3>
            <p className="font-dm text-base font-normal text-[#767676]">{price}</p>
          </Flex>
          <p className="font-dm text-base font-normal text-[#767676]">Black</p>
     </Link>
    </div>
  );
};

export default CartCard;
