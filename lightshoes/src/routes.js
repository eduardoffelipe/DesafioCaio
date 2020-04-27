import Vue from "vue";
import VueRouter from "vue-router";
import ListProduct from "./pages/ListProduct.vue";
import Signin from './pages/Signin.vue';
import Cadastro from './pages/Cadastro.vue';
import Cart from './pages/Cart.vue'
import Checkout from './pages/Checkout.vue'

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
  {
    path: "/cart",
    name: "Sign Up",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Sign Up",
    component: Checkout,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

export default router;
