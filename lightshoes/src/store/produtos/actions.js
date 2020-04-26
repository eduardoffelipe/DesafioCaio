import * as TYPES from './types';

// actions
export const actions = {
  addProduct: ({commit}, product) => {
    commit([TYPES.PUSH_PRODUCT_TO_CART], product)
  },
  subtractProduct: ({commit}, product) =>{
    commit([TYPES.SUBSTRACT_CART_BY_ID], product)
  },
  removeItem: ({commit}, product) => {
    commit([TYPES.REMOVE_ITEM_CART_BY_ID], product)
  },

};