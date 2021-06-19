<template>
  <HeaderItem :esta_logado="true"/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/primeiro">Primeiro</router-link> |
    <router-link to="/life">Life Cycle</router-link> |
    <router-link to="/pessoa">Pessoa</router-link>    
  </div>
  <router-view />
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
export default {
  components: {
    HeaderItem,
  },
};
</script>

<style>
body {
  background-color: rgb(116, 98, 98);
  color: #fff;
}

.teste {
  background-color: #000;
}

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
