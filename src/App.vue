<template>
  <div id="app">
    <div class="header-con">
      <div class="header">
        <x-button class="flex-center">
          <img class="vue-logo" src="./assets/logo.png" />
          <span>OneAuth-Vue Sample Project</span>
        </x-button>
        <x-button v-if="logedin" @click="logout">Logout</x-button>
        <x-button v-else @click="login">Login</x-button>
      </div>
    </div>
    <h2>You can query userInfo like blow::</h2>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
          const userInfo = await this.$oneAuth.getUserInfo();
        </code>
      </pre>
    </div>
    <template v-if="userInfo">
      <h2>Here is you userInfo:</h2>
      <json-viewer
        :value="userInfo"
        :expand-depth="5"
        copyable
        boxed
        sort
      ></json-viewer>
    </template>
    <router-link to="/need-auth">去需要认证的页面</router-link>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  private logedin = false;

  private userInfo: Record<string, unknown> | null = null;

  @Watch("logedin", {
    immediate: true,
  })
  private async onlogedin() {
    if (this.logedin) {
      this.userInfo = await this.$oneAuth.getUserInfo();
    } else {
      this.userInfo = null;
    }
  }

  public created(): void {
    this.logedin = this.$oneAuth.isAuthenticated();
  }
  private login() {
    this.$oneAuth.login({
      redirectUri: `http://localhost:8080/`,
    });
  }

  private logout() {
    this.$oneAuth.logoutOneAuth({
      redirectUri: `http://localhost:8080/`,
    });
  }
}
</script>
<style scoped>
.header-con {
  height: 61px;
  background: #1b1c1d;
  color: #fff;
}
.header-con .header {
  height: 100%;
  display: flex;
  align-items: center;
  width: 723px;
  margin: auto;
}
.header .vue-logo {
  height: 35px;
  width: 35px;
  margin-right: 10px;
}
</style>
