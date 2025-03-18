import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Pagination from '../components/Pagination';
import Image from '../components/Image';
import IconOne from '../assets/iconOne.png';
import IconTwo from '../assets/iconTwo.png';

import Catagory from '../components/Catagory.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Shop = () => {
  let data = useSelector((state) => state.breadFunction.preiousValue);
  const [categories, setCategory] = useState([]);
  const [currentCategorySlug, setcurrentCategorySlug] = useState();
  
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <section className="py-[140px]">
      <Container>
        <h2 className="pb-4 text-5xl font-bold">Products</h2>
        <div className="pb-20">
          <p>
            <Link to={data == 'Home' ? '/' : `/${data}`}>{data}</Link>> Products
          </p>
        </div>

        <Flex>
          <div className="w-3/12 pr-10">
            <h3 className="font-dm text-xl font-bold text-[#262626]">
              Shop by Category
            </h3>
            <div className="mt-8 flex flex-col gap-y-4">
              {categories.map((item, index) => {
                return (
                  <Catagory
                    key={index}
                    catagoryText={item.name}
                    setcurrentCategorySlug={setcurrentCategorySlug}
                    slug={item.slug}
                  />
                );
              })}
              <Catagory catagoryText="Accessories" />
              <Catagory catagoryText="Device">
                <Catagory catagoryText="Phone" />
                <Catagory catagoryText="Laptop">
                  <Catagory catagoryText="Dell" />
                  <Catagory catagoryText="HP" />
                  <Catagory catagoryText="Lenovo" />
                </Catagory>
                <Catagory catagoryText="Computer" />
                <Catagory catagoryText="Mouse" />
              </Catagory>
            </div>
          </div>
          <div className="w-9/12">
            <Flex className="justify-between pb-[60px]">
              <div className="flex gap-x-5">
                <Image src={IconOne} />
                <Image src={IconTwo} />
              </div>
              <Flex className="gap-x-10">
                <div className="flex items-center gap-x-4">
                  <h5>Sort by:</h5>
                  <select className="border border-[#F0F0F0] px-5 py-2">
                    <option value="">Featured</option>
                    <option value="">color</option>
                    <option value="">jaina</option>
                  </select>
                </div>
                <div className="flex items-center gap-x-4">
                  <h5>Show::</h5>
                  <select className="border border-[#F0F0F0] px-5 py-2">
                    <option value="">6</option>
                    <option value="">12</option>
                    <option value="">24</option>
                    <option value="">36</option>
                  </select>
                </div>
              </Flex>
            </Flex>
            <Pagination itemsPerPage={12} categorySlug={currentCategorySlug} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
