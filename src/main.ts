import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import OneAuth from "@oneauth/sdk-core";
import OneAuthVue from "@oneauth/sdk-vue";
const oneAuth = new OneAuth({
  issuer: `https://qq12345.oneauth.cn/oauth/v1`,
  clientId: `r21qktX1D2mJt1S71508909zh48r0626`,
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
