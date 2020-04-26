import Vue from "vue";
import Vuex from "vuex";
import {produtos} from "./produtos/index"
Vue.use(Vuex);

Vue.config.devtools = process.env.NODE_ENV === 'development'
export default new Vuex.Store({
  modules: {
    namespaced: true,
    produtos,
  },
});
