
<template>
  <v-app id="app">
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Light Shoes"
          class="shrink mr-2"
          contain
          src="./assets/logo_light_shoes.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        color="primary"
        text
      >
        <v-icon color="primary">mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
''
    <v-content>
      <ListProduct/>
    </v-content>
  </v-app>
</template>

<script>
import ListProduct from './pages/ListProduct';

export default {
  name: 'App',

  components: {
    ListProduct,
  },

  data: () => ({
    //
  }),
};
</script>




