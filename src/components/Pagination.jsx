import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CartCard from '../components/CartCard';
import axios from 'axios';
import Flex from './Flex';
function Pagination({ itemsPerPage, categorySlug }) {
  let [data, setData] = useState({});
  let [skip, setSkip] = useState(0);
  console.log(categorySlug);

  if (categorySlug) {
    useEffect(() => {
      async function allData() {
        let response = await axios.get(
          `https://dummyjson.com/products/category/${categorySlug}?limit=${itemsPerPage}&skip=${skip}`,
        );
        setData(response.data);
      }
      allData();
    }, [skip, categorySlug]);
  } else {
    useEffect(() => {
      async function allData() {
        let response = await axios.get(
          `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`,
        );
        setData(response.data);
      }
      allData();
    }, [skip]);
  }

  console.log(data);

  function hnadleSkip(event) {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`,
    );
    setSkip(newOffset);
  }
  const pageCount = Math.ceil((data.total || 0) / (itemsPerPage || 1));
  return (
    <>
      {/* paginate item   */}
      <Flex className="flex flex-wrap">
        {data.products?.map((item, index) => (
          <div key={index} className="w-1/3 p-4">
            <CartCard
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              discountPercentage={item.discountPercentage + ' %'}
            />
          </div>
        ))}
      </Flex>

      {/* paginate */}
      <div className="mt-20 flex justify-between">
        <ReactPaginate
          breakLabel="...."
          nextLabel="Next >"
          className="flex gap-x-5"
          pageLinkClassName="py-4 px-5 bg-gray-500 text-white"
          onPageChange={hnadleSkip}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
        />
        <h2>
          Products from {data.skip + 1} to {data.skip + data.limit} of{' '}
          {data.total}
        </h2>
      </div>
    </>
  );
}

export default Pagination;
