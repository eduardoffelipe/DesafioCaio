import * as TYPES from './types';

// actions
export const actions = {
  addProductToCart: ({commit}, item) => {
    commit(TYPES.PUSH_PRODUCT_TO_CART, item)
  },
  subtractProduct: ({commit}, item) =>{
    commit(TYPES.SUBSTRACT_CART_BY_ID, item)
  },
  removeProduct: ({commit}, item) => {
    commit(TYPES.REMOVE_ITEM_CART_BY_ID, item)
  },

};