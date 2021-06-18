<template>
  <dir>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou buscando novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias para back-end:</p>
    <ul>
      <li v-for="(tecnologia, index) in backend_tecnologias" :key="index">
        {{ tecnologia }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="item in frontend_tecnologias" :key="item.id">
        {{ item.language }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">Mostre e-mail</button>
    </div>
    <p v-if="4 > 7">Testando1</p>
    <p v-else>Testando2</p>
    <p v-show="mostrar_email">Meu emial é {{ email }}</p>
    <p class="teste">
      Para acessar meu portifólio <a v-bind:href="meu_link">Clique Aqui</a>
    </p>
    <PictureItem></PictureItem>
  </dir>
</template>

<script>
import PictureItem from "./PictureItem.vue";
export default {
  name: "InfoItem",
  components: {
    PictureItem,
  },
  props: {
    email: String,
    esta_trabalhando: Boolean,
  },
  data() {
    return {
      mostrar_email: false,
      meu_link: "https://google.com",
      textoBotao: "Mostrar botão",
      backend_tecnologias: ["JavaScript", "PHP", "Python3"],
      frontend_tecnologias: [
        { id: 1, language: "HTML" },
        { id: 2, language: "CSS" },
        { id: 3, language: "Vue" },
      ],
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;
      if (!this.mostrar_email) {
        this.textoBotao = "Mostrar e-mail";
      } else {
        this.textoBotao = "Esconder e-mail";
      }
    },
  },
};
</script>

<style>
.paragrafo-pai {
  color: red;
}
</style>