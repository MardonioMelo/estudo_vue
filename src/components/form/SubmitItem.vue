<template>
  <div>
    <button type="submit" :title="titleBtn">{{ nameBtn }}</button>
  </div>
</template>

<script>
export default {
  name: "SubmitItem",  
  props: {
    nameBtn: { type: String, required: true, default: "Enviar Form" },
    titleBtn: {},
  },
};
</script>