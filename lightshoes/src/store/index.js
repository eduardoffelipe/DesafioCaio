import Vue from "vue";
import Vuex from "vuex";
import {produtos} from "./produtos/index"
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, 
})

Vue.config.devtools = process.env.NODE_ENV === 'development'
export default new Vuex.Store({
  modules: {
    namespaced: true,
    produtos,
  },
  plugins: [vuexLocalStorage.plugin]
});
