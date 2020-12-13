import React from 'react';

const Product = ({ product, handleAddToCart }) => (
  <div className="Product-item">
    <img
      src={`${process.env.API_URL}${product.image[0].formats.thumbnail.url}`}
      alt={product.title}
    />
    <div className="Product-item__info">
      <h2>
        {product.title}
        <span>{product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button" onClick={() => handleAddToCart(product)}>
      Comprar
    </button>
  </div>
);

export default Product;
