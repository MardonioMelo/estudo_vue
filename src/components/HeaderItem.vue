<template>
  <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/primeiro">Primeiro</router-link></li>
      <li><router-link to="/life">Life Cycle</router-link></li>
      <li v-if="esta_logado"><router-link to="/info">Perfil</router-link></li>
  </ul>
</template>

<script>
export default {
    name: 'HeaderItem',
    props: ["esta_logado"]
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background-color: #111;
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #DDD;
        text-decoration: none;
        transition: .5s;       
    }

    a:hover{
        color: turquoise;
    }
</style>