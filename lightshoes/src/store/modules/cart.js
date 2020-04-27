const state = {
  items: [],
};

// getters
const getters = {
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

//mutations
const mutations = {

  pushProductToCart: (state, item) => {
    const productIndex = state.items.findIndex(p => p.id == item.id)
    if(productIndex != -1 ){
      state.items[productIndex].quantidade += 1
      return
    }

    state.items.push({
      item,
      quantidade: 1
    })

    console.log(state.items.map(el => ({id: el.id, quantidade: el.quantidade})))
  },

  removeItemById: (state, {id}) => {
    const productIndex = state.items.findIndex(product => product.id == id)
    state.items.splice(productIndex, 1)
  },

  subtractById: (state, {id}) => {
    const productIndex = state.items.findIndex(product => product.id == id)
    if(state.items[productIndex].quantidade <= 1)
      return
    state.items[productIndex].quantidade -= 1
  },

};
// actions
const actions = {
  addProduct: ({commit}, product) => {
    commit('pushProductToCart', product)
  },
  subtractProduct: ({commit}, product) =>{
    commit('subtractById', product)
  },
  removeItem: ({commit}, product) => {
    commit('removeItemById', product)
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};



// // getters
// const getters = {
//   cartProducts: (state, getters, rootState) => {
//     return state.items.map(({ id, quantity }) => {
//       const product = rootState.products.all.find(product => product.id === id)
//       return {
//         title: product.title,
//         price: product.price,
//         quantity
//       }
//     })
//   },