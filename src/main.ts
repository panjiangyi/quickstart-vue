import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import OneAuth from "@oneauth/sdk-core";
import OneAuthVue from "@oneauth/sdk-vue";
const oneAuth = new OneAuth({
  issuer: `https://cipherchinacc.oneauth.cn/dashboard/oauth/v1`,
  clientId: `017W6u5i5OQX8Hv9489n31u04S11N98w`,
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
