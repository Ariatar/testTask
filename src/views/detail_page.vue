<template>
   <div>
      <div class="d-flex justify-center">
         <v-progress-circular
            v-if="loading"
            :size="50"
            color="primary"
            indeterminate
         ></v-progress-circular>
      </div>

      <v-card class="mx-auto" max-width="400">
         <v-img
            class="white--text align-end"
            height="200px"
            :src="user.avatar_url"
         >
            <v-card-title>{{ user.created_at }}</v-card-title>
         </v-img>

         <v-card-subtitle class="pb-0 black--text">{{
            user.name
         }}</v-card-subtitle>

         <v-card-text class="text--red">
            <div class="red--text">{{ user.location }}</div>

            <div class="green--text">Followers: {{ user.followers }}</div>
         </v-card-text>

         <v-card-actions>
            <v-btn color="orange" text>
               Share
            </v-btn>

            <v-btn color="orange" text>
               Explore
            </v-btn>
         </v-card-actions>
      </v-card>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import axios from "axios";

export default {
   data() {
      return {
         user: {},
         id: this.$route.params.id,
         loading: false,
      };
   },

   async created() {
      this.loading = true;
      try {
         await axios
            .get(`https://api.github.com/users/${this.id}`)

            .then((res) => {
               this.user = res.data;

               console.log(res.data);
               this.loading = false;
            });
      } catch (error) {
         this.loading = false;
         console.log(error);
      }
   },
};
</script>

<style lang="scss" scoped></style>
