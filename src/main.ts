import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import OneAuth from "@oneauth/sdk-core";
import OneAuthVue from "@oneauth/sdk-vue";
const oneAuth = new OneAuth({
  issuer: `https://gmail.cipherchina.com/oauth/v1`,
  clientId: `5ae674f63edb4cbb867779454505db38`,
  redirectUri: `http://localhost:8080/callback`,
  scopes: ["openid", "profile", "email"],
});

Vue.use(OneAuthVue, {
  oneAuth,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
