import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-json-viewer/style.css";
import JsonViewer from "vue-json-viewer";
import "@/assets/reset.css";
import OneAuth from "@oneauth/sdk-core";
import OneAuthVue from "@oneauth/sdk-vue";
import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
Vue.use(JsonViewer);

Vue.use(VueCodeHighlight);
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

Vue.config.ignoredElements = [/^x-/];

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
