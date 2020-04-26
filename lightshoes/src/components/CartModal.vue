<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Carrinho de Compras</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list subheader>
      <v-subheader>Produtos no Carrinho</v-subheader>

      <v-list-item v-for="cartItem in cartItems" :key="cartItem.id">
        <v-list-item-avatar>
          <v-img width="80" :src="cartItem.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-title v-text="cartItem.name"></v-list-item-title>

        <v-btn icon @click="addProduct(cartItem)">
          <v-icon color="#164894">mdi-plus</v-icon>
        </v-btn>
          <v-btn icon @click="subtractProduct(cartItem)">
            <v-icon color="#164894">mdi-minus</v-icon>
          </v-btn>
          <v-list-item-title v-text="cartItem.quantidade"></v-list-item-title>

          <v-list-item-title v-text="cartItem.quantidade"></v-list-item-title>


        <v-btn icon @click="removeItem(cartItem)">
          <v-icon color="#ff6961">mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Finalizar Pedido</v-subheader>
      <!-- 
                <v-list-item v-for="item in items2" :key="item.title">
                  <v-list-item-avatar>
                    <v-btn></v-btn>
                  </v-list-item-avatar>

                  <v-list-item-content> </v-list-item-content>
      </v-list-item>-->
    </v-list>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", {
      cartItems: "getProductsOfCart"
    })
  },
  methods: mapActions("cart", ["addProduct", "removeItem", "subtractProduct"]),

  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>