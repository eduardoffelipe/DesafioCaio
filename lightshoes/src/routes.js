import Vue from "vue";
import VueRouter from "vue-router";
import ListProduct from "./pages/ListProduct.vue";
import Signin from './pages/Signin.vue';
import Cadastro from './pages/Cadastro.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListProduct",
    component: ListProduct,
  },
  {
    path: "*",
    name: "Not Found",
    component: ListProduct,
  },
  {
    path: "/login",
    name: "Login",
    component: Signin,
  },
  {
    path: "/cadastro",
    name: "Sign Up",
    component: Cadastro,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

export default router;
