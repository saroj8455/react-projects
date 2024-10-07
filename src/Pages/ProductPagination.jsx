import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import React, { useEffect, useRef, useState } from 'react';
import { v6 as uuidv6 } from 'uuid';

const dummyProductsUrl =
  'https://dummyjson.com/products?limit=10&skip=10&select=title,price';

export default function ProductPagination() {
  const effectRan = useRef(false);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10; // products per page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dummyProducts = async () => {
      setLoading(true);

      try {
        const skip = (page - 1) * limit;
        console.log(skip);

        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (effectRan.current) {
      dummyProducts();
    }

    return () => {
      // clean up code goes here
      effectRan.current = true;
    };
  }, [page, limit]);

  const handelPrevious = () => {
    console.log('previous page');
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };
  const handelNext = () => {
    console.log('next page');
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <div className='container'>
        <h3 className='text-2xl text-500'>Products Pagination</h3>
      </div>
      <div className='container pt-4'>
        {loading ? (
          <p className='text-900 '>loading products.....</p>
        ) : (
          <ul>
            {products.map((product, index) => (
              <li key={uuidv6()}>
                <h4 className='text-2xl text-500'>{product.title}</h4>
                <div className='text-900 text-xl flex gap-2 align-items-center'>
                  <span>&#8377;</span>
                  <Chip label={product.price} />
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className='flex gap-4 py-4'>
          <Button
            onClick={handelPrevious}
            icon='pi pi-angle-left'
            className='p-ripple'
            label='Previous'
            disabled={page === 1}
          />
          <Button
            onClick={handelNext}
            icon='pi pi-angle-right'
            className='p-ripple'
            label='Next'
            iconPos='right'
          />
        </div>
      </div>
    </section>
  );
}
