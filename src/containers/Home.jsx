import React from 'react';

import Products from '../components/Products';

import initialState from '../initialState';

const Home = () => (
  <main className="Home">
    <Products products={initialState.products} />
  </main>
);

export default Home;
