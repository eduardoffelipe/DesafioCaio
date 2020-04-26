<template>
  <v-row>
    <template v-for="product in products">
      <v-col cols="12" xs="12" sm="6" md="3" v-bind:key="product.id">
        <v-card class="elevation-3" align="center" max-width="400">
          <v-img class="mr-20" max-width="280" :src="product.image" alt="Tenis 1" />
          <v-card-title style="color:#363636;">{{ product.name }}</v-card-title>
          <h3 class="ml-5" align="left">R$ {{ product.price }}</h3>
          <v-card-subtitle align="left">Marca: {{ product.brand }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="addProductToCart(product)" width="100%">
              <v-snackbar v-model="snackbar">
                Produto Adicionado com sucesso
                <v-btn color="pink" text @click="snackbar= false">Close</v-btn>
              </v-snackbar>
              <v-badge :content="10" left :value="10" color="secondary" overlap>
                <v-icon right dark>mdi-cart</v-icon>Adicionar ao carrinho
              </v-badge>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    snackbar: false
  }),

  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters("cart", {
      cartItems: "getProductsOfCart",
      getProductQuantidade: "getProductQuantidade"
    })
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    addProductToCart(product){
      this.snackbar = true,
      this.addProduct(product)
    }
  }
};
</script>
