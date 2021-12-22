<template>

  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-contact">Add Contact</router-link>

  </div>





  <router-view />
</template>

<script>
import Home from './views/Home.vue'
import { mapActions, mapMutations } from 'vuex'

export default {
   methods: {
      ...mapActions(["getContacts"]),
       ...mapMutations(["populateContacts"]),




   },

   mounted() {
     this.getContacts()
   },
   components: {
     Home
   }

}

</script>

<style lang="scss">

</style>
