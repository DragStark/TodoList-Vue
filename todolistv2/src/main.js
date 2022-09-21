import App from "./App.vue";
import Vue from 'vue'
import Vuex from 'vuex'
import storeConfigs from "./store";

Vue.use(Vuex)

const store = new Vuex.Store(storeConfigs)

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
