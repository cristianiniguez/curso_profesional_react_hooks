import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

import AppContext from '../context/AppContext';

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <h1 className="Header__title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header__checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header__alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
