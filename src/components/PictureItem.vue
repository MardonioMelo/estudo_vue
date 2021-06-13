<template >
  <div>
    <img :src="avatar" :alt="descricao" />
  </div>
</template>

<script>
export default {
  name: "PictureItem",
  data() {
    return {
      avatar: "./img/avatar.jpg",
      descricao: "Mardônio",
    };
  },
};
</script>
