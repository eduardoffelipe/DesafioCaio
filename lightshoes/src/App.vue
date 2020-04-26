
<template>
  <v-app id="app">
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Light Shoes"
          class="shrink mr-2"
          contain
          src="./assets/logo_light_shoes.png"
          transition="scale-transition"
          width="40"
        />
        <h1 class="textLogo">LightShoes</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/login" color="primary" text>Login</v-btn>
      <v-badge color="secondary" overlap>
        <v-dialog v-model="dialog" max-width="800px" transition="dialog-bottom-transition">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">CART</v-btn>
          </template>
            <cartModal/>
        
        <!-- <a href="/cart" text>
          <v-icon large color="primary">mdi-cart</v-icon>
        </a> -->
       </v-dialog> 
      </v-badge>
    </v-app-bar>''
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
 import cartModal from './components/CartModal.vue';

export default {
  name: "App",

  components: {
    cartModal
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.textLogo {
  font-family: "Permanent Marker", cursive;
  color: #09ce91;
  font-size: 24px;
}
</style>





