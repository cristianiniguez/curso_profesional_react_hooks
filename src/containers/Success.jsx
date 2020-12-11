import React, { useContext } from 'react';

import Map from '../components/Map';

import '../styles/components/Success.css';

import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  const location = useGoogleAddress(buyer[0].address);

  return (
    <main className="Success">
      <div className="Success__content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success__map">
          <Map data={location} />
        </div>
      </div>
    </main>
  );
};

export default Success;
