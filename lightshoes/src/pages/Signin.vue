<template>
  <v-app id="login">
    <v-content>
      <v-container
        class="fill-height"
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
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions align="center">
                <v-btn width="100%" color="primary">Login</v-btn>
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

</style>