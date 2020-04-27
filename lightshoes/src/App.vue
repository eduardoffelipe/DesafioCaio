
<template>
  <v-app id="app">
    <v-app-bar app color="white" dark>
      <div class="d-flex no-wrap align-center">
        <v-img
          alt="Light Shoes"
          class="shrink mr-2"
          contain
          src="./assets/logo_light_shoes.png"
          transition="scale-transition"
          width="80"
        />
        <a href="/" class="linkLogo">
          <h1 class="textLogo">LightShoes</h1>
        </a>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/login" color="primary" text>Login</v-btn>
      <v-badge :content="cartItems" :value="cartItems" color="secondary" overlap>

            <v-btn icon color="primary" dark href="/cart">
              <v-icon large>mdi-cart</v-icon>
            </v-btn>

      </v-badge>
    </v-app-bar>''
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters("produtos", {
      cartItems: "getProductsOfCart"
    })
  },

  name: "App",


};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.linkLogo {
  text-decoration: none;
}
.textLogo {
  font-family: "Permanent Marker", cursive;
  color: #09ce91;
  font-size: 24px;
}
</style>





