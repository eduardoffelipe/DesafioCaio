import {products} from '../../data/products'
export const getInitialState = () => ({
  items: products,
  cartItems: [],
});

export const state = getInitialState();
