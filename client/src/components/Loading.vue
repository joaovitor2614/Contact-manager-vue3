
<template>
    <div className="loader">
     <img className="loader__image" :src="loading" />
    </div>
</template>
<script>

export default {
data() {
    return { loading: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'}
}
}
</script>
<style lang="">

</style>