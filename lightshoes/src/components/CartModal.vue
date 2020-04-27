<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Carrinho de Compras</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click.prevent="closeDialog()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list subheader>
      <v-subheader>Produtos no Carrinho</v-subheader>
      <v-list-item v-for="cartItem in cartItems" :key="cartItem.id">
        <v-list-item-avatar>
          <v-img width="80" :src="cartItem.item.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-title v-text="cartItem.item.name"></v-list-item-title>
        <v-list-item>
          <v-btn icon @click="addProductToCart(cartItem.item)">
            <v-icon color="#164894">mdi-plus</v-icon>
          </v-btn>
          <p class="mb-0 mr-2 ml-2">{{cartItem.quantidade}}</p>
          <v-btn icon @click="subtractProduct(cartItem.item)">
            <v-icon color="#164894">mdi-minus</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item-title>R$ {{cartItem.priceTotal}}</v-list-item-title>

        <v-btn icon @click="removeProduct(cartItem.item)">
          <v-icon color="#ff6961">mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Finalizar Pedido</v-subheader>
      <div class="d-flex space-between">
        <v-btn color="primary" class="ml-5">Finalizar Pedido</v-btn>
        <v-spacer></v-spacer>
        <h2 class="mr-5 textTotal">
          <span class="subText">TOTAL:</span>R$ {{cartPrice}}
        </h2>
      </div>
    </v-list>
  </v-card>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("produtos", ["cartItems"]),
    ...mapGetters("produtos", {
      cartPrice: "getTotalValueOfCart",
    })
  },
  methods: {
    ...mapActions("produtos", [
      "addProductToCart",
      "removeProduct",
      "subtractProduct"
    ]),
  }
};
</script>
<style scoped>
.textTotal {
  color: #333;
  font-size: 24px;
}
.subText {
  color: #999999;
  font-size: 16px;
}
</style>