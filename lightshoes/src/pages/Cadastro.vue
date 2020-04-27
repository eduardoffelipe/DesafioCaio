<template>
  <v-app id="register">
    <v-container class="fill-height" fluid>
      <v-row align="start" justify="center">
        <v-img max-width="300px" src="../assets/logo_light_shoes.png" />
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Cadastrar um produto</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="produto.valid" lazy-validation>
                <v-text-field
                  :rules="[v => !!v || 'Preencha o nome']"
                  v-model="produto.name"
                  label="Nome do Produto"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  :rules="[v => !!v || 'Preencha o valor']"
                  type="number"
                  v-model="produto.value"
                  label="Valor"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  :rules="[v => !!v || 'Preencha a marca']"
                  v-model="produto.brand"
                  label="Marca"
                  outlined
                  required
                ></v-text-field>

                <v-file-input
                  :rules="[v => !!v || 'Escolha a Imagem']"
                  v-model="produto.image"
                  label="imagem"
                  outlined
                ></v-file-input>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'Você precisa aceitar']"
                  label="Confirmo que as informações estão corretas."
                  required
                ></v-checkbox>

                <v-btn type="submit" color="primary" class="mr-4" @click.prevent="store">Salvar</v-btn>

                <v-btn color="error" class="mr-4" @click="reset">Limpar Campos</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import api from '../services/api'
export default {
  data: () => ({
    produto: {
      valid: true,
      name: "",
      value: "",
      brand: "",
      image: ""
    }
  }),

  methods: {
    async storeProduct() {
      await api.post(`/products`, {
        name: this.produto.name,
        value: this.produto.value,
        brand: this.produto.brand,
        image: this.produto.brand
      })
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    store() {
      if (this.$refs.form.validate()) {
        this.storeProduct();
        alert(this.produto.name);
      }
    }
  }
};
</script>

<style scoped>
#register {
  background-image: url("../assets/background.svg");
  background-color: #fff;
  background-size: cover;
}
</style>