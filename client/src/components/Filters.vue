<template>
    <div class="filters">

        <FilterForm
        :text="this.$store.state.filters.text"
        :handleText="handleText"
        />
    </div>
</template>
<script>
import FilterForm from './FilterForm.vue'

export default {
    components: {
        FilterForm
    },
    methods: {
        handleText(text) {
            this.$store.commit('filtersByText', text)
        }
    }
}
</script>
<style lang="">

</style>