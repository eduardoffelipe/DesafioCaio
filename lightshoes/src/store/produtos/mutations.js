import { getInitialState } from './state';
import * as TYPES from './types';

export const mutations = {
  [TYPES.PUSH_PRODUCT_TO_CART]: ( { id } ) => {
    const productIndex = getInitialState().items.findIndex(p => p.id == id)
    if(productIndex != -1 ){
      getInitialState().items[productIndex].quantidade += 1
      return
    }

    getInitialState().cartItems.push({
      id,
      quantidade: 1
    })

     console.log(getInitialState().items.map(el => ({id: el.id, quantidade: el.quantidade})))
  },

  // [TYPES.REMOVE_ITEM_CART_BY_ID]: (state, {id}) => {
  //   const state = getInitialState();
  //   const productIndex = state.items.findIndex(product => product.id == id)
  //   state.items.splice(productIndex, 1)
  // },

  // [TYPES.SUBSTRACT_CART_BY_ID]: (state, {id}) => {
  //   const state = getInitialState();
  //   const productIndex = state.items.findIndex(product => product.id == id)
  //   if(state.items[productIndex].quantidade <= 1)
  //     return
  //   state.items[productIndex].quantidade -= 1
  // },

};