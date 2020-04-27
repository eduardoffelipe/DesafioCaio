<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Carrinho de Compras</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon color="white" @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
    </v-toolbar>
    <v-list subheader>
      <v-subheader>Produtos no Carrinho</v-subheader>
      <v-list-item v-for="cartItem in cartItems" :key="cartItem.id">
        <v-list-item-avatar>
          <v-img width="80" :src="cartItem.item.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-title v-text="cartItem.item.name"></v-list-item-title>
       <v-list-item>
          <v-btn icon @click="addProduct(cartItem)">
          <v-icon color="#164894">mdi-plus</v-icon>
        </v-btn>
          <p class="mb-0 mr-2 ml-2">{{cartItem.quantidade}}</p>
          <v-btn icon @click="subtractProduct(cartItem)">
            <v-icon color="#164894">mdi-minus</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item-title v-text="cartItem.item.price"></v-list-item-title>

        <v-btn icon @click="removeProduct(cartItem)">
          <v-icon color="#ff6961">mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Finalizar Pedido</v-subheader>
    <div class="d-flex space-between">
    <v-btn color="primary" class="ml-5">
      Finalizar Pedido     
    </v-btn>
    <v-spacer></v-spacer>
    <h2 class="mr-5 textTotal"><span class="subText">TOTAL:</span>R$ 1999,00</h2>
    </div>  
    </v-list>
  </v-card>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("produtos", ['cartItems'])
  },
  methods: {
    ...mapActions("produtos", ["addProduct", "removeProduct", "subtractProduct"]),
  },

};
</script>
<style scoped>
  .textTotal{
    color: #333;
    font-size: 28px;
  }
  .subText{
    color:#888888;
    font-size: 18px;
  }
</style>