<template>
  <div>
    <HeaderItem/>
    <PrimeiroCompenente />
    <p class="paragrafo-pai">O dado de app é: {{testando}}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroCompenente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/PessoaItem.vue";
import HeaderItem from './components/HeaderItem.vue';

export default {
  name: "App",
  components: {
    PrimeiroCompenente,
    LifeCycle,
    Pessoa,
    HeaderItem,
  },
  data() {
    return {
      testando: "Teste"
    }
  },
};
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: red;
  }

  .teste{
    background-color: #000;
  }
</style>
