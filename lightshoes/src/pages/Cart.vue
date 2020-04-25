<template>
  <v-app id="register">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-card-text>
              <v-list subheader>
                <v-subheader>Recent chat</v-subheader>

                <v-list-item v-for="item in items" :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon color="#ff6961">mdi-delete</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>Previous chats</v-subheader>

                <v-list-item v-for="item in items2" :key="item.title" >
                  <v-list-item-avatar>
                    <v-btn></v-btn>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed:{

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