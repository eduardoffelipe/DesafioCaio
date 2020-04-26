const state = {
  items: [
    {
      id: 1,
      name: "Tênis Nike Air Max",
      brand: "Nike",
      price: "399,00",
      quantidade: 50,
      image:
        "https://static.netshoes.com.br/produtos/tenis-nike-air-max-oketo-masculino/14/HZM-0636-014/HZM-0636-014_zoom1.jpg?ts=1583766826",
    },
    {
      id: 2,
      name: "Tênis Adidas Grand Court",
      brand: "Adidas",
      price: "299,00",
      quantidade: 755,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-masculino/44/COL-7146-044/COL-7146-044_zoom1.jpg?ts=1587409813&ims=544x",
    },
    {
      id: 3,
      name: "Tênis Nike Sb",
      brand: "Nike",
      price: "149,00",
      quantidade: 5,
      image:
        "https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg?ims=544x",
    },
    {
      id: 4,
      name: "Tênis Oakley Mod",
      brand: "Oakley",
      price: "99,00",
      quantidade: 42,
      image:
        "https://static.netshoes.com.br/produtos/tenis-oakley-mod-evade-plus-masculino/10/D63-9757-010/D63-9757-010_zoom1.jpg?ts=1582319811&ims=544x",
    },
    {
      id: 5,
      name: "Tênis Oakley Westcliff",
      brand: "Oakley",
      price: "149,99",
      quantidade: 0,
      image:
        "https://static.netshoes.com.br/produtos/tenis-oakley-westcliff-20-masculino/04/D63-8427-004/D63-8427-004_zoom1.jpg?ts=1571677953&ims=544x",
    },
    {
      id: 6,
      name: "Tênis Adidas Lite",
      brand: "Adidas",
      price: "199,00",
      quantidade: 81,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/56/COL-7070-056/COL-7070-056_zoom1.jpg?ts=1562348090&ims=544x",
    },
    {
      id: 7,
      name: "Tênis Adidas Lite",
      brand: "Adidas",
      price: "199,00",
      quantidade: 81,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/56/COL-7070-056/COL-7070-056_zoom1.jpg?ts=1562348090&ims=544x",
    },
    {
      id: 8,
      name: "Tênis Adidas Lite",
      brand: "Adidas",
      price: "199,00",
      quantidade: 81,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/56/COL-7070-056/COL-7070-056_zoom1.jpg?ts=1562348090&ims=544x",
    },
  ],
};

// getters
const getters = {
  getListProducts: (state) => {
    return state;
  },
  getProductById: (state) => ({ id }) => {
    const product = state.items.find((product) => product.id === id);
    console.log(product)
    return product
  },
};

//mutations
const mutations = {
  setProducts(state, products) {
    state.prodcuts = state.products.concat(products);
  },
};
// actions
const actions = {
  getAllProducts({ commit, state }) {
    state.products.getProducts((products) => {
      commit("setProducts", products);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
