import React, { useEffect, useState } from 'react';
import Image from '../components/Image';
import Container from '../components/Container';
import Flex from '../components/Flex';
import BannerImage from '../assets/banner.jpg';

import Warrenty1 from '../assets/warrenty1.png';
import Warrenty2 from '../assets/warrenty2.png';
import Warrenty3 from '../assets/warrenty3.png';
import PomotionOne from '../assets/Ad_1.jpg';
import PomotionTwo from '../assets/Ad_2.jpg';
import PomotionThree from '../assets/Ad_3.png';
import OfferImage from '../assets/offer.jpg';
import CommonHeading from '../components/CommonHeading';
import CartCard from '../components/CartCard';

import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';
import NextArrow from '../components/NextArrow';
import PrevArrow from '../components/PrevArrow';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  let [allProduct, setAllProduct] = useState([]);

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    async function allData() {
      let data = await axios.get(
        'https://dummyjson.com/products/?skip=50&limit=4',
      );
      setAllProduct(data.data.products);
    }
    allData();
  }, []);

  return (
    <>
      <section>
        <Image className="mx-auto" src={BannerImage} />
      </section>
      <section className="border-b border-[#F0F0F0]">
        <Container>
          <Flex className="justify-between py-8">
            <Flex className="gap-x-8">
              <Image src={Warrenty1} />
              <p className="font-dm text-base font-normal text-[#6D6D6D]">
                Two years warranty
              </p>
            </Flex>
            <Flex className="gap-x-8">
              <Image src={Warrenty2} />
              <p className="font-dm text-base font-normal text-[#6D6D6D]">
                Free shipping
              </p>
            </Flex>
            <Flex className="gap-x-8">
              <Image src={Warrenty3} />
              <p className="font-dm text-base font-normal text-[#6D6D6D]">
                Return policy in 30 days
              </p>
            </Flex>
          </Flex>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-2 gap-4 pb-[128px] pt-[140px]">
          <Image
            className="col-span-1 row-span-2 h-full w-full"
            src={PomotionOne}
          />
          <Image
            className="col-span-1 row-span-1 h-full w-full"
            src={PomotionTwo}
          />
          <Image
            className="col-span-1 row-span-1 h-full w-full"
            src={PomotionThree}
          />
        </div>
      </Container>

      <section className="pb-20">
        {/* Slick Slider Start */}
        <Container>
          <CommonHeading className="pb-12" text="New Arrivals" />
          <Slider {...settings}>
            {allProduct.map((item, index) => (
              <div key={index} className="mx-2 py-4">
                <CartCard
                  title={item.title}
                  price={item.price}
                  image={item.thumbnail}
                  discountPercentage={item.discountPercentage + ' %'}
                />
              </div>
            ))}
          </Slider>
        </Container>
        {/* Slick Slider end */}
      </section>

      <section className="pb-20">
        <Container>
          <CommonHeading className="pb-12" text="Our Bestsellers" />
          <Flex className="gap-x-10">
            {allProduct.map((item, index) => (
              <CartCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.thumbnail}
                discountPercentage={item.discountPercentage + ' %'}
              />
            ))}
          </Flex>
        </Container>
      </section>

      <Container>
        <Image className="pb-20" src={OfferImage} />
      </Container>

      <section className="pb-20">
        <Container>
          <CommonHeading className="pb-12" text="Special Offers" />
          <Flex className="gap-x-10">
            {allProduct.map((item, index) => (
            
              <CartCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.thumbnail}
                discountPercentage={item.discountPercentage + ' %'}
              />
             
            ))}
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Home;
