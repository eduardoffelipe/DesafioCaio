export const getters = {
  getListProducts: (state) => {
    return state.items;
  },
  getProductById: (state) => ({ id }) => {
    const product = state.items.find((product) => product.id === id);
    return product
  },
  getProductsOfCart: (state ) => {
    return state.cartItems.length
  },

  getProductQuantidade: (state) => (id) =>{
    const product = state.cartItems.find(product => product.id == id)
    return product.quantidade
  }
};