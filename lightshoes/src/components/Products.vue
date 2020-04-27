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
            <v-btn color="primary" @click="addProduct(item)" width="100%">
              <v-icon right dark>mdi-cart</v-icon>Adicionar ao carrinho
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </template>
    <v-dialog v-model="modal" max-width="500">
      <v-card align="center">
        <v-card-title class="headline">Produto Adicionado com sucesso</v-card-title>

        <v-img width="50%" src="../assets/check-circle.gif" alt="Check Circle" />

        <v-card-actions align="center">
          <v-btn align="center" color="primary" @click.prevent="modal=false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    modal: false
  }),

  computed: {
    ...mapState("produtos", ["items"], ["cartItems"]),
    ...mapGetters("produtos", {
      cartItems: "getProductsOfCart",
      getProductQuantidade: "getProductQuantidade"
    })
  },
  methods: {
    ...mapActions("produtos", ["addProductToCart"]),
    addProduct(item) {
      this.addProductToCart(item);
      this.modal = true;
    }
  }
};
</script>
