import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Checkout.css';

import AppContext from '../context/AppContext';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = removeFromCart;

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <main className="Checkout">
      <div className="Checkout__content">
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : 'Sin pedidos ...'}
        {cart.map((item) => (
          <div key={item.cartId} className="Checkout__item">
            <div className="Checkout__element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout__sidebar">
          <h3>{`Precio total: ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Checkout;
