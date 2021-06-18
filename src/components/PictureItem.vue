<template >
  <div>
    <img :src="avatar" :alt="descricao" />
    <reutilizacao-item/>
  </div>
</template>

<script>
import ReutilizacaoItem from './ReutilizacaoItem.vue';
export default {
  components: { ReutilizacaoItem },
  name: "PictureItem",
  data() {
    return {
      avatar: "./img/avatar.jpg",
      descricao: "Mardônio",
    };
  },
};
</script>
