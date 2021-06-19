<template>
  <div class="home">
    <PictureItem />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import PictureItem from "@/components/PictureItem.vue";

export default {
  name: "Home",
  components: {
    PictureItem,
  },
};
</script>
