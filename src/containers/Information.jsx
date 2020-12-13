import React, { useRef, useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import '../styles/components/Information.css';

import AppContext from '../context/AppContext';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);

  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      dpto: formData.get('dpto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return !cart.length ? (
    <Redirect to="/checkout" />
  ) : (
    <main className="Information">
      <div className="Information__content">
        <div className="Information__head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information__form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Dpto." name="dpto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information__buttons">
          <div className="Information__back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information__next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information__sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={item.cartId} className="Information__item">
            <div className="Information__element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Information;
