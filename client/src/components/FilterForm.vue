<template>
    <div class="filter-form">
         <input v-model="text" class="input-field input-field--big"
         type="text" @input="handleText(text)" placeholder="Filtrar por nome" />

    </div>
</template>
<script>
export default {
    props: ['text', 'handleText']
}
</script>
<style lang="">

</style>