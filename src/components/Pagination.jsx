import React, { useEffect, useState } from 'react';
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
    let [adddata,setAlldata]=useState([])
  
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = adddata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(adddata.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % adddata.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  useEffect(()=>{
    setAlldata(Data)
    
},[])


  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="...."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination