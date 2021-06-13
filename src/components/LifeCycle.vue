<template>
  <div>
    <h1>O dado de app é: {{ nome }}</h1>
  </div>
</template>

<script>
export default {
  name: "LiveCycle",
  data() {
    return {
      nome: "Ainda não sei",
    };
  },
  created() {
    setTimeout(() => {
      this.nome = "Mardônio";
    }, 1000);

    this.lifeCycle();
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Pedro";
      this.lifeCycle();
    }, 2000);

    this.lifeCycle();
  },
  methods: {
    lifeCycle() {
      console.log("Executou");
    },
  },
};
</script>