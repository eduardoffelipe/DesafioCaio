
<template>
  <v-row align="center" class="mr-10">
    <template v-for="product in products">
      <v-col cols="12" xs="12" sm="6" md="4" v-bind:key="product.id">
        <v-card class="elevation-3 mr-0" align="center" max-width="350">
          <v-img class="mr-20" max-width="280" :src="product.image" alt="Tenis 1" />
          <v-card-title style="color:#363636;">{{product.name}}</v-card-title>
          <h3 class="ml-5" align="left">R$ {{product.price}}</h3>
          <v-card-subtitle align="left">Marca: {{product.brand}}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="itens++" width="100%">Adicionar ao carrinho</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    source: String
  },
    computed: mapState({
    products: state => state.products.all
  }),
};
</script>







