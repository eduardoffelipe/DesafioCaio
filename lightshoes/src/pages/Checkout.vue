<template>
  <v-app id="register">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-row align="center" justify="center">
            <v-card class="elevation-12 mt-10 card">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Finalizar Pagamento</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="dados.valid" lazy-validation>
                  <!-- StepFrom 1 -->
                  <div class="mt-10" v-if="step === 1">
                    <v-text-field
                      :rules="[v => !!v || 'Preencha o nome']"
                      v-model="dados.name"
                      label="Nome Completo"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="dados.emailRules"
                      type="email"
                      v-model="dados.email"
                      label="Email"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha o CPF']"
                      v-model="dados.cpf"
                      label="Marca"
                      outlined
                      required
                    ></v-text-field>

                    <v-btn color="primary" class="mr-4" @click.prevent="step=2">Próximo</v-btn>
                  </div>

                  <!-- StepFrom 2 -->
                  <div class="mt-10" v-if="step === 2">
                    <v-text-field
                      :rules="[v => !!v || 'Preencha o cep']"
                      v-model="dados.endereco.cep"
                      label="CEP"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha a rua']"
                      type="email"
                      v-model="dados.endereco.rua"
                      label="Email"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha o Bairro']"
                      v-model="dados.endereco.bairro"
                      label="Marca"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha a Cidade']"
                      v-model="dados.endereco.cidade"
                      label="Marca"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha o Estado']"
                      v-model="dados.endereco.estado"
                      label="Marca"
                      outlined
                      required
                    ></v-text-field>

                    <v-btn color="primary" class="mr-4" @click.prevent="step = 3">Próximo</v-btn>

                    <v-btn
                      type="submit"
                      color="secondary"
                      class="mr-4"
                      @click.prevent="step=1"
                    >Voltar</v-btn>
                  </div>

                  <!-- StepFrom 3 -->
                  <div class="mt-10" v-if="step === 3">
                    <v-text-field
                      :rules="[v => !!v || 'Preencha o nome do Titular do cartão']"
                      v-model="dados.pagamento.nameTitular"
                      label="Nome do Titular do Cartão"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      :rules="[v => !!v || 'Preencha o número do cartão']"
                      v-model="dados.pagamento.numberCard"
                      label="Número do Cartão"
                      outlined
                      required
                    ></v-text-field>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          :rules="[v => !!v || 'Preencha a validade']"
                          v-model="dados.pagamento.validCard"
                          label="Validade do Cartão MM/AA"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          :rules="[v => !!v || 'Preencha a validade']"
                          v-model="dados.pagamento.securityCode"
                          label="Código de Segurança"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      type="submit"
                      color="primary"
                      class="mr-4"
                      @click.prevent="send()"
                    >Próximo</v-btn>

                    <v-btn
                      type="submit"
                      color="secondary"
                      class="mr-4"
                      @click.prevent="step=2"
                    >Voltar</v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card class="elevation-12 mt-10">
            <v-simple-table min-height="600" class="elevation-5">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cartItem in cartItems" :key="cartItem.id">
                    <td class="displaynone">
                      <v-img width="80" :src="cartItem.item.image"></v-img>
                    </td>
                    <td>{{ cartItem.item.name }}</td>
                    <td>
                      <div>
                        <p class="mr-2 ml-2 pr-5 pl-5 pt-1 pb-1 quantity">{{cartItem.quantidade}}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <v-spacer></v-spacer>
                <tfoot>
                  <tr>
                    <td>
                      <v-btn href="/" color="primary" class="ml-5 mt-10 mb-5">Voltar a comprar</v-btn>
                    </td>
                    <td></td>
                    <td>
                      <h2 class="mt-10 mb-5 textTotal">Total: R$ {{cartPrice}}</h2>
                    </td>
                  </tr>
                </tfoot>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    step: 1,
    dados: {
      valid: true,
      name: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      cpf: "",
      endereco: {
        cep: "",
        rua: "",
        bairro: "",
        validCard: "",
        estado: ""
      },
      pagamento: {
        nameTitular: "",
        rua: "",
        numberCard: "",
        validCard: "",
        securityCode: ""
      }
    }
  }),
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
    ]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    send() {
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
@media (min-width: 960px) {
  .card {
    width: 45vw;
  }
}
@media (max-width: 961px) {
  .card {
    width: 95vw;
  }
}
</style>