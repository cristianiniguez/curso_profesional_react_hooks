import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Checkout.css';

const Checkout = () => (
  <main className="Checkout">
    <div className="Checkout__content">
      <h3>Lista de Pedidos</h3>
      <div className="Checkout__item">
        <div className="Checkout__element">
          <h4>Item name</h4>
          <span>$10</span>
        </div>
        <button type="button">
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
    <div className="Checkout__sidebar">
      <h3>Precio total: $10</h3>
      <Link to="/checkout/information">
        <button type="button">Continuar pedido</button>
      </Link>
    </div>
  </main>
);

export default Checkout;
