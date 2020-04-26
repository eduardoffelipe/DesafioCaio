export const getters = {
  getListProducts: (state) => {
    return state;
  },
  getProductById: (state) => ({ id }) => {
    const product = state.items.find((product) => product.id === id);
    return product
  },
  getProductsOfCart: (state, getters, rootState) => {
    console.log(state.items)
    const allProducts = state.items.map(cartItem => {
      const product = rootState.products.items.find(product => product.id == cartItem.id)
      return {
        ...product,
        quantidade: cartItem.quantidade
      }
    })
    console.log(allProducts)
    return allProducts
  },

  getProductQuantidade: (state) => (id) =>{
    const product = state.items.find(p => p.id == id)
    console.log(product.quantidade)
    return product.quantidade || 0
  }
};