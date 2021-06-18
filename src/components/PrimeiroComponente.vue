<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    <MultiplosEventos />
    <ReutilizacaoItem />
    <ReutilizacaoItem />
    <ReutilizacaoItem />
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import ReutilizacaoItem from "./ReutilizacaoItem.vue";

export default {
  name: "PrimeiroCompenente",
  components: {
    MultiplosEventos,
    ReutilizacaoItem,
  },
  data() {
    return {
      nome: "Mardônio",
      profissao: "Programador",
    };
  },
};
</script>