<template>
  <v-row>
    <template v-for="item in items">
      <v-col cols="12" xs="12" sm="6" md="3" v-bind:key="item.id">
        <v-card class="elevation-3" align="center" max-width="400">
          <v-img class="mr-20" max-width="280" :src="item.image" alt="Tenis 1" />
          <v-card-title style="color:#363636;">{{ item.name }}</v-card-title>
          <h3 class="ml-5" align="left">R$ {{ item.price }}</h3>
          <v-card-subtitle align="left">Marca: {{ item.brand }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="addProduct(item.id)" width="100%">
              <v-snackbar v-model="snackbar">
                Produto Adicionado com sucesso
                <v-btn color="pink" text @click="this.snackbar=false">Close</v-btn>
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
    ...mapState('produtos', ['items'], ['cartItems']),
    ...mapGetters('produtos', {
      cartItems: 'getProductsOfCart',
      getProductQuantidade: 'getProductQuantidade'
    }),
  },
  methods: {
    ...mapActions('produtos', ['addProduct']),
    addProductToCart(item){
      this.snackbar = true,
      this.addProduct(item)
    },
  },
  watch:{

  }
};
</script>
