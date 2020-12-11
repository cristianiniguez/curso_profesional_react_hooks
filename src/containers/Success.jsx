import React, { useContext } from 'react';

import Map from '../components/Map';

import '../styles/components/Success.css';

import AppContext from '../context/AppContext';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <main className="Success">
      <div className="Success__content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success__map">
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Success;
