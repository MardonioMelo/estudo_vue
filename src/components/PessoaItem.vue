<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <InfoItem :email="email"  :esta_trabalhando=true />
    <FormItem />
  </div>
</template>

<script>
import InfoItem from "./InfoItem";
import FormItem from "./FormItem";

export default {
  name: "PessoaItem",
  components: { InfoItem, FormItem },
  data() {
    return {
      nome: "Mardônio",
      email: "mardonio.quimico@gmail.com2"
    };
  },
};
</script>
