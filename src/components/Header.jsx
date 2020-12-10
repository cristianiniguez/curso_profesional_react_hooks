import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

const Header = () => (
  <header className="Header">
    <h1 className="Header__title">
      <Link to="/">PlatziConf Merch</Link>
    </h1>
    <div className="Header__checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
    </div>
  </header>
);

export default Header;
