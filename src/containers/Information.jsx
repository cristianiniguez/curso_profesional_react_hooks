import React from 'react';

import '../styles/components/Information.css';

const Information = () => (
  <main className="Information">
    <div className="Information__content">
      <div className="Information__head">
        <h2>Información de contacto</h2>
      </div>
      <div className="Information__form">
        <form>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo electrónico" name="email" />
          <input type="text" placeholder="Dirección" name="address" />
          <input type="text" placeholder="Dpto." name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Código postal" name="cp" />
          <input type="text" placeholder="Teléfono" name="phone" />
        </form>
      </div>
      <div className="Information__buttons">
        <div className="Information__back">Regresar</div>
        <div className="Information__next">Pagar</div>
      </div>
    </div>
    <div className="Information__sidebar">
      <h3>Pedido:</h3>
      <div className="Information__item">
        <div className="Information__element">
          <h4>ITEM name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </main>
);

export default Information;
