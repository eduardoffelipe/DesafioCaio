<template>
  <v-app id="cart">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <div class="d-flex space-between">
              <v-btn class="btn-back mb-5" text color="primary" href="/">
                <v-icon>mdi-cart</v-icon>Voltar as Compras
              </v-btn>
            </div>
            <div v-if="cartItems.length > 0">
              <v-simple-table min-height="600" class="elevation-5">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="displaynone"></th>
                      <th class="text-left">Name</th>
                      <th class="text-left">Quantidade</th>
                      <th class="text-left displaynone">Preço</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cartItem in cartItems" :key="cartItem.id">
                      <td class="displaynone">
                        <v-img width="80" :src="cartItem.item.image"></v-img>
                      </td>
                      <td>{{ cartItem.item.name }}</td>
                      <td>
                        <div class="d-flex">
                          <v-btn
                            class="mb-0 displaynone"
                            icon
                            @click="addProductToCart(cartItem.item)"
                          >
                            <v-icon color="#164894">mdi-plus</v-icon>
                          </v-btn>
                          <p class="mr-2 ml-2 pr-5 pl-5 pt-1 pb-1 quantity">{{cartItem.quantidade}}</p>
                          <v-btn
                            class="mb-0 displaynone"
                            icon
                            @click="subtractProduct(cartItem.item)"
                          >
                            <v-icon color="#164894">mdi-minus</v-icon>
                          </v-btn>
                        </div>
                      </td>
                      <td class="displaynone">R$ {{cartItem.priceTotal}}</td>
                      <td>
                        <v-btn icon @click="removeProduct(cartItem.item)">
                          <v-icon color="#ff6961">mdi-delete</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <v-btn
                          href="/checkout"
                          color="primary"
                          class="ml-5 mt-10 mb-5"
                        >Finalizar Pedido</v-btn>
                      </td>
                      <td class="displaynone"></td>
                      <td class="displaynone"></td>
                      <td>
                        <h2 class="mt-10 mb-5 textTotal">R$ {{cartPrice}}</h2>
                      </td>
                    </tr>
                  </tfoot>
                </template>
              </v-simple-table>
            </div>
            <div v-else class>
              <v-card
                min-height="600"
                class="d-flex flex-column align-center justify-center elevation-12 empty-cart"
              >
                <h2>Seu carrinho esta Carrinho Vazio</h2>
                <svg
                  stroke="currentColor"
                  fill="#999"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  size="140"
                  height="140"
                  width="140"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"
                  />
                </svg>
                <v-btn class="btn-back mt-5" color="primary" href="/">
                  <v-icon>mdi-cart</v-icon>Voltar as Compras
                </v-btn>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("produtos", ["cartItems"]),
    ...mapGetters("produtos", {
      cartPrice: "getTotalValueOfCart"
    })
  },
  methods: {
    ...mapActions("produtos", [
      "addProductToCart",
      "removeProduct",
      "subtractProduct"
    ])
  }
};
</script>
<style scoped>
#cart {
  background-image: url("../assets/background.svg");
  background-color: #fff;
  background-size: cover;
}
.textTotal {
  color: #333;
  font-size: 24px;
}
.subText {
  color: #999999;
  font-size: 16px;
}
.quantity {
  border: 1px solid #164894;
  border-radius: 5px;
}

@media (max-width: 700px) {
  .displaynone {
    display: none;
  }
  .textTotal {
    color: #333;
    font-size: 14px;
  }
  .subText {
    color: #999999;
    font-size: 12px;
  }
  .quantity {
    margin-top: 10px;
  }
  svg {
    fill: #ddd;
  }
}
</style>