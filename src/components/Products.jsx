import React, { useContext } from 'react';

import Product from './Product';

import '../styles/components/Products.css';

import AppContext from '../context/AppContext';

const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = addToCart;

  return (
    <div className="Products">
      <div className="Products__items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
