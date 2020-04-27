import { getInitialState } from './state';
import * as TYPES from './types';
export const mutations = {
  [TYPES.PUSH_PRODUCT_TO_CART]: (state , { id } ) => {
    const initalState = getInitialState().cartItems
    const productIndex = initalState.findIndex(p => p.id == id)
    console.log(productIndex)
    if(productIndex != -1){
      console.log('aqui porra')
      state.cartItems[productIndex].quantidade += 1
      return
    }

    state.cartItems.push({
      id,
      quantidade: 1
    })

    //  console.log(state.map(el => ({id: el.id, quantidade: el.quantidade})))
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