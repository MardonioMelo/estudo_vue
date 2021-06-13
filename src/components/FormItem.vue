<template>
  <div>
    <h2>Meu Formulário</h2>
    <form action="" @submit="enviarForm($event)">
      <!-- <div><InputText /></div> -->
      <div><InputText :desc="'Campo 1'" /></div>
      <input type="text" v-model="name" />
      <input type="text" v-model="email" />
      <div><SubmitItem :nameBtn="'Enviar'" :titleBtn="'Clique para enviar'" /></div>
    </form>
    <br /><br /><br />
  </div>
</template>

<script>
import InputText from "./form/InputText.vue";
import SubmitItem from "./form/SubmitItem.vue";

export default {
  components: { SubmitItem, InputText },
  name: "FormItem",
  data() {
    return {
      name: "",
      email: "",       
    };
  },
  methods: {
    enviarForm(e) {
      e.preventDefault();

      const name = this.name;
      const email = this.email;

      console.log("Formulário Enviado");
      console.log("O nome é: " + name);
      console.log("O email é: " + email);
    },
  },
};
</script>
