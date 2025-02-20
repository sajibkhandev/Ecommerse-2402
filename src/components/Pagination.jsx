import React, {  useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product1 from '../assets/product1.png'
import Data from '../data'
import CartCard from '../components/CartCard';



function Items({ currentItems }) {
    return (
    <>
      <div className='flex flex-wrap gap-x-[46px]'>
      {currentItems &&
        currentItems.map((item) => (
          <div className=''>
            <CartCard title={item.title}  price={item.price} image={item.image}/>
          </div>
    ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



  return (
    <>
      <Items currentItems={currentItems} />
      <div className='mt-20 flex justify-between'>
      <ReactPaginate
        breakLabel="...."
        nextLabel=""
        className="flex gap-x-5"
        pageLinkClassName=" p-5 bg-[#262626] text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
      <h2>Products from {itemOffset+1} to {endOffset>Data.length?Data.length:endOffset} of {Data.length}</h2>
      </div>
    </>
  );
}

export default Pagination