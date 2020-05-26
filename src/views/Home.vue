<template>
   <v-content>
      <v-container class="fill-height" fluid>
         <v-layout align-center justify-center>
            <v-flex sm8 md8 xs12>
               <v-card class="elevation-12">
                  <v-layout>
                     <v-flex md8
                        ><v-card-text class="mt-12">
                           <h4 class="text-center mt-4 red--text">
                              Enter your Personal
                           </h4>
                           <v-form
                              ><v-text-field
                                 v-model="email"
                                 label="email"
                                 name="email"
                                 type="email"
                                 :rules="emailRules"
                                 color="teat accent-3"
                                 prepend-icon="mdi-email"
                              ></v-text-field>
                              <v-text-field
                                 v-model="password"
                                 label="password"
                                 name="password"
                                 type="password"
                                 :rules="passwordRules"
                                 color="teat accent-3"
                                 prepend-icon="mdi-lock"
                              ></v-text-field>
                           </v-form>

                           <h5 class="text-center">
                              Forgot your password?
                           </h5></v-card-text
                        >
                        <div class="text-center">
                           <v-btn
                              to="/about"
                              class="mb-2"
                              color="blue accent-3"
                              rounded
                              >Sign In</v-btn
                           >
                        </div>
                     </v-flex>
                     <v-flex md4>
                        <v-card><v-img src="../assets/Yo.jpg"></v-img></v-card>
                     </v-flex>
                  </v-layout>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-content>
</template>

<script>
// @ is an alias to /src

export default {
   data: () => ({
      valid: true,
      password: "",
      passwordRules: [
         (v) => !!v || "PAssword is required",
         (v) =>
            (v && v.length <= 10) || "PAssword must be less than 10 characters",
      ],
      email: "",
      emailRules: [
         (v) => !!v || "Email is required",
         (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
   }),

   methods: {
      validate() {
         this.$refs.form.validate();
      },
      reset() {
         this.$refs.form.reset();
      },
      resetValidation() {
         this.$refs.form.resetValidation();
      },
   },
};
</script>
