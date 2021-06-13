<template>
  <div>
    <input type="text" :placeholder="desc" />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["desc"]
};
</script>