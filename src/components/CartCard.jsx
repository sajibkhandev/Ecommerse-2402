// import React from 'react';
// import CartOne from '../assets/cart1.png';
// import Image from './Image';
// import Flex from './Flex';
// import { FaHeart } from 'react-icons/fa';

// const CartCard = ({ title, price, image }) => {
//   return (
//     <div className="group relative w-full rounded p-4 shadow">
//       <div className="absolute bg-black px-8 py-3 font-dm text-base font-bold text-white">
//         New
//       </div>
//       <div className="relative overflow-hidden">
//         <Image className="w-full" src={image} />
//         <div className="invisible absolute -bottom-1/3 left-0 h-1/3 w-full bg-white opacity-0 duration-300 group-hover:visible group-hover:bottom-0 group-hover:opacity-100">
//           <ul className="flex flex-col items-end p-8">
//             <Flex className="items-center gap-x-2 py-1">
//               <li>Add to Wish List </li>
//               <FaHeart />
//             </Flex>
//             <Flex className="items-center gap-x-2 py-1">
//               <li>Compare </li>
//               <FaHeart />
//             </Flex>
//             <Flex className="items-center gap-x-2 py-1">
//               <li>Add to Cart </li>
//               <FaHeart />
//             </Flex>
//           </ul>
//         </div>
//       </div>

//       <Flex className="justify-between pb-3 pt-6">
//         <h3 className="font-dm text-xl font-bold text-[#262626]">{title}</h3>
//         <p className="font-dm text-base font-normal text-[#767676]">{price}</p>
//       </Flex>
//       <p className="font-dm text-base font-normal text-[#767676]">Black</p>
//     </div>
//   );
// };

// export default CartCard;

import React from 'react';
import Flex from './Flex';
import { BsArrowRepeat, BsCartPlus, BsHeart } from 'react-icons/bs';

const CartCard = ({ title, price, discountPercentage = 'New', image }) => {
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
            <div className="flex w-fit cursor-pointer items-center gap-3 transition-all duration-200 hover:font-bold">
              <h3>Add to Cart</h3>
              <BsCartPlus />
            </div>
          </Flex>
        </div>
      </div>
      <Flex className="justify-between pb-3 pt-6">
        <h3 className="line-clamp-1 font-dm text-xl font-bold text-[#262626]">
          {title}
        </h3>
        <p className="font-dm text-base font-normal text-[#767676]">{price}</p>
      </Flex>
      <p className="font-dm text-base font-normal text-[#767676]">Black</p>
    </div>
  );
};

export default CartCard;
