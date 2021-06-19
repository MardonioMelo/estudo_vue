<template >
  <div>
    <img :src="avatar" :alt="descricao" />
    <MudarImagem @mudar-imagem="trocarImagem" />
  </div>
</template>

<script>
import MudarImagem from "./MudarImagem.vue";
export default {
  components: { MudarImagem },
  name: "PictureItem",
  data() {
    return {
      avatar: "/img/avatar.jpg",
      descricao: "Mardônio",
    };
  },
  methods: {
    trocarImagem() {      
      if (this.avatar === "/img/avatar.jpg"){
        this.avatar = "/img/avatar2.png";
      }else{
        this.avatar = "/img/avatar.jpg";
      }      
    },
  },
};
</script>
