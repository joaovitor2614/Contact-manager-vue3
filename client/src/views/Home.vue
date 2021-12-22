<template>

  <h1>oajsdasjdo</h1>









</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import { mapState } from 'vuex'

export default {

  name: 'Home',
   components: {
     ContactCard
   },
   computed: {
          ...mapState(["contacts"])
        },

}
</script>
