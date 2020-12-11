import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';

import '../styles/components/Payment.css';

import AppContext from '../context/AppContext';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const history = useHistory();

  const paypalOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <main className="Payment">
      <div className="Payment__content">
        <h3>Resumen del Pedido:</h3>
        {cart.map((item) => (
          <div className="Payment__item" key={item.cartId}>
            <div className="Payment__element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment__button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={(error) => console.log({ error, message: 'error' })}
            onPaymentCancel={(data) =>
              console.log({ data, message: 'canceled' })
            }
          />
        </div>
      </div>
      <div className="Payment__sidebar" />
    </main>
  );
};

export default Payment;
