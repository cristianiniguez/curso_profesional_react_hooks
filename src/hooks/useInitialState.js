import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState({ ...initialState, cartCount: 0 });

  const addToCart = (payload) => {
    const index = state.cartCount;
    setState({
      ...state,
      cart: [...state.cart, { ...payload, cartId: index }],
      cartCount: index + 1,
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.cartId !== payload.cartId),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
