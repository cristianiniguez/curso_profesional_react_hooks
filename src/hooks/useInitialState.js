import { useState, useEffect } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = `${process.env.API_URL}/products`;

const useInitialState = () => {
  const [state, setState] = useState({ ...initialState, cartCount: 0 });

  useEffect(async () => {
    const { data } = await axios(API);
    setState({
      ...state,
      products: data,
    });
  }, []);

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

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
