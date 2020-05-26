<template>
   <div class="about">
      <v-card max-width="550" class="mx-auto">
         <v-toolbar color="cyan" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
               <v-icon>mdi-magnify</v-icon>
            </v-btn>
         </v-toolbar>

         <v-list three-line>
            <template v-for="(item, index) in users">
               <v-divider :key="index.name" :inset="item.inset"></v-divider>

               <v-list-item :key="index">
                  <router-link :to="'/abou/' + item.id">
                     <v-list-item-avatar>
                        <v-img :src="item.avatar_url"></v-img>
                     </v-list-item-avatar>
                  </router-link>

                  <v-list-item-content>
                     <v-list-item-title
                        class="red--text display-1"
                        v-html="item.login"
                     ></v-list-item-title>
                     <v-list-item-subtitle class="green--text"
                        >Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum, natus?</v-list-item-subtitle
                     >
                  </v-list-item-content>
               </v-list-item>
            </template>
         </v-list>
      </v-card>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
      return {};
   },
   methods: {
      ...mapActions([
         "fetch_users", //also supports payload `this.nameOfAction(amount)`
      ]),
   },
   mounted() {
      this.fetch_users();
   },
   computed: {
      ...mapGetters(["users"]),
   },
};
</script>
