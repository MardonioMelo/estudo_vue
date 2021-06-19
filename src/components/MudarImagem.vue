<template>
    <dir>
        <button @click="$emit('mudarImagem')">Trocar imagem de perfil</button>
    </dir>
</template>
<script>
export default {
    name: 'MudarImagem',
    emits: ['mudarImagem']
}
</script>