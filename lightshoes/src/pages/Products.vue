
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row align="center">
          <template v-for="product in products">
            <v-col cols="12" sm="12" md="4" v-bind:key="product.id">
              <v-card class="elevation-3" width="600">
                <v-img
                  class="white--text align-end"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
                <v-card-title>{{product.name}}</v-card-title>
                <v-card-subtitle>R$899,00</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="#09ce91">Adicionar ao carrinho</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => {
    return {
      products: [
        {
          id: 1,
          name: "MacBook Pro (15 inch)",
          description:
            "This laptop has a super crisp Retina display. Yes, we know that it's overpriced...",
          price: 2999,
          inStock: 50
        },
        {
          id: 2,
          name: "Samsung Galaxy Note 7",
          description:
            "Unlike the overpriced MacBook Pro, we're selling this one a bit cheap, as we heard it might explode...",
          price: 299,
          inStock: 755
        },
        {
          id: 3,
          name: "HP Officejet 5740 e-All-in-One-printer",
          description:
            "This one might not last for so long, but hey, printers never work anyways, right?",
          price: 149,
          inStock: 5
        },
        {
          id: 4,
          name: "iPhone 7 cover",
          description:
            "Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?",
          price: 49,
          inStock: 42
        },
        {
          id: 5,
          name: "iPad Pro (9.7 inch)",
          description:
            "We heard it's supposed to be pretty good. At least that's what people say.",
          price: 599,
          inStock: 0
        },
        {
          id: 6,
          name: "OnePlus 3 cover",
          description:
            "Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!",
          price: 19,
          inStock: 81
        }
      ]
    };
  }
};
</script>