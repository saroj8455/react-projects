import React, { useEffect, useRef, useState } from 'react';
import { v6 as uuidv6 } from 'uuid';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

export default function About() {
  const effectRan = useRef(false);
  const [page, setPage] = useState(1);
  const [skipCount, setSkipCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 10; // products per page

  const fetchProducts = async () => {
    try {
      const skip = (page - 1) * limit;
      console.log(skip);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
      );
      const data = await response.json();
      const products = data.products;
      setData((previousData) => [...previousData, ...products]);
      setSkipCount(skip);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (effectRan.current) {
      fetchProducts();
    }

    return () => {
      // clean up code goes here
      effectRan.current = true;
    };
  }, [page, limit]);

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  // Add scroll event listener and clean up on unmount
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 1000);

    window.addEventListener('scroll', debouncedHandleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []); // Only run once when the component mounts

  useEffect(() => {
    if (loading == true && skipCount < total) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <section>
      <div className='container'>
        {data.length > 1 &&
          data.map((product, index) => (
            <article key={uuidv6()}>
              <ul>
                <li>
                  <h4 className='text-2xl text-500'>
                    {product.id} : {product.title}
                  </h4>
                  <div className='text-900 text-xl flex gap-2 align-items-center'>
                    <span>&#8377;</span>
                    <Chip label={product.price} />
                  </div>
                </li>
              </ul>
            </article>
          ))}
        {/* <article>{data.length}</article> */}
        {loading && <h1>Loading.... {data.length}</h1>}
      </div>
    </section>
  );
}
