import React from 'react';

import '../styles/components/Payment.css';

const Payment = () => (
  <main className="Payment">
    <div className="Payment__content">
      <h3>Resumen del Pedido:</h3>
      <div className="Payment__button">Boton de pago con Paypal</div>
    </div>
    <div className="Payment__sidebar" />
  </main>
);

export default Payment;
