<template>
  <div id="app">
    <div>
      <button @click="login">login</button>
      <button @click="logout">logout</button>
    </div>
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">去需要认证的页面</router-link> |
      <router-link to="/userinfo">展示用户信息</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class App extends Vue {
  private login() {
    this.$oneAuth.login({
      redirectUri: `http://localhost:8080/`,
    });
    this.$router;
  }

  private logout() {
    this.$oneAuth.logoutOneAuth({
      redirectUri: `http://localhost:8080/`,
    });
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
