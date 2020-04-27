export const getters = {
  getListProducts: (state) => {
    return state.items;
  },
  getProductById: (state) => ({ id }) => {
    const product = state.items.find((product) => product.id === id);
    return product
  },
  getProductsOfCart: (state ) => {
    return state.cartItems
  },

  getProductQuantidade: (state) => (id) =>{
    const product = state.items.find(p => p.id == id)
    console.log(product.quantidade)
    return product.quantidade || 0
  }
};