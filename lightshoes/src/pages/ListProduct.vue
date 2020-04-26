<template >
  <v-app id="products">
    <v-content>
      <v-container>
        <Products />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Products from "../components/Products";

export default {
  components: {
    Products
  }
};
</script>
<style scoped>
#products {
  background-image: url("../assets/background.svg");
  background-color: #fff;
  background-size: cover;
}
</style>