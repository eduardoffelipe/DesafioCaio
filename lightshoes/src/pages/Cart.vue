<template>
  <v-app id="register">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
             <cartModal/> 
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import cartModal from '../components/CartModal.vue' 

export default {
  components:{
    cartModal,
  }
}
</script>



