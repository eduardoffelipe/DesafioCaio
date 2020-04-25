
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row align="center">
          <template v-for="product in products">
            <v-col cols="12" sm="12" md="4" v-bind:key="product.id">
              <v-card class="elevation-3" width="600">
                <v-img 
                :src="product.image" 
                class="white--text align-end"
                />

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
          name: "Tênis Nike Air Max",
          description:
            "This laptop has a super crisp Retina display. Yes, we know that it's overpriced...",
          price: 2999,
          inStock: 50,
          image:
            "https://static.netshoes.com.br/produtos/tenis-nike-air-max-oketo-masculino/14/HZM-0636-014/HZM-0636-014_zoom1.jpg?ts=1583766826"
        },
        {
          id: 2,
          name: "Tênis Adidas Grand Court",
          description:
            "Unlike the overpriced MacBook Pro, we're selling this one a bit cheap, as we heard it might explode...",
          price: 299,
          inStock: 755,
          image:
            "https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-masculino/44/COL-7146-044/COL-7146-044_zoom1.jpg?ts=1587409813&ims=544x"
        },
        {
          id: 3,
          name: "Tênis Nike Sb",
          description:
            "This one might not last for so long, but hey, printers never work anyways, right?",
          price: 149,
          inStock: 5,
          image:
            "https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg?ims=544x"
        },
        {
          id: 4,
          name: "Tênis Oakley Mod",
          description:
            "Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?",
          price: 49,
          inStock: 42,
          image:"https://static.netshoes.com.br/produtos/tenis-oakley-mod-evade-plus-masculino/10/D63-9757-010/D63-9757-010_zoom1.jpg?ts=1582319811&ims=544x"
        },
        {
          id: 5,
          name: "Tênis Oakley Westcliff",
          description:
            "https://static.netshoes.com.br/produtos/tenis-oakley-westcliff-20-masculino/04/D63-8427-004/D63-8427-004_zoom1.jpg?ts=1571677953&ims=544x",
          price: 599,
          inStock: 0,
          image: "https://static.netshoes.com.br/produtos/tenis-oakley-westcliff-20-masculino/04/D63-8427-004/D63-8427-004_zoom1.jpg?ts=1571677953&ims=544x",
        },
        {
          id: 6,
          name: "Tênis Adidas Lite",
          description:
            "Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!",
          price: 19,
          inStock: 81,
          image:"https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/56/COL-7070-056/COL-7070-056_zoom1.jpg?ts=1562348090&ims=544x"
        }
      ]
    };
  }
};
</script>