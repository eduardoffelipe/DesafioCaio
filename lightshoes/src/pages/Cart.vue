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

      data: () => ({
      items: [
        { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items2: [
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
      ],
    }),

};
</script>

<style scoped>
#register {
  background-image: url("../assets/background.svg");
  background-color: #fff;
  background-size: cover;
}
</style>