import React from 'react';

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
        <button type="button">Eliminar</button>
      </div>
    </div>
    <div className="Checkout__sidebar">
      <h3>Precio total: $10</h3>
      <button type="button">Continuar pedido</button>
    </div>
  </main>
);

export default Checkout;
