import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    loading: false,
  },
  mutations: {
    all_users: (state, users) => (state.users = users),
    user: (state, user) => (state.user = user),
  },
  actions: {
    fetch_users({ commit }) {
      return axios
        .get("https://api.github.com/users", {
          " Access-Control-Allow-Origin": "https://api.github.com/users",
        })
        .then(users => {
          commit("all_users", users.data);
          return users;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetch_user({ commit }) {
      this.loading = true;
      try {
        await axios
          .get(`https://api.github.com/users/${this.id}`, {
            "Access-Control-Allow-Origin": "https://api.github.com/users",
          })
          .then(res => {
            commit("user", res.data);
            this.user = res.data;

            console.log(res.data);
            this.loading = false;
          });
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    users: state => state.users,
    user: state => state.user,
  },
});
