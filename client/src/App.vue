<template>
  <Header />






  <router-view />
</template>

<script>

import Home from './views/Home.vue'
import Header from './components/layout/Header.vue'
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
     Home,
     Header

   }
}
</script>
