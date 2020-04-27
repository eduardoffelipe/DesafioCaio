<template>
  <v-app id="login">
    <v-content>
      <v-container
        fluid
      >
       <v-row
          align="start"
          justify="center"
        >
          <v-img
            max-width="300px"
            src="../assets/logo_light_shoes.png"
          />
       </v-row>  
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
            <v-card class="elevation-12 mt-10">
              <v-toolbar
                color="#fff"
                dark
                flat
              >
              <h2>Login</h2>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    type="email"
                  />

                  <v-text-field
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions align="center">
                <v-btn href="/cadastro" width="100%" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
  }
</script>
<style scoped>
 #login{
   background-image: url('../assets/background.svg');
    background-color: #fff;
   background-size: cover;
   }
  h2{
    color:#333
  } 

</style>