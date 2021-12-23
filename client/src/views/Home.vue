<template>

  <div class="home__cards">

    <ContactCard
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"

      />
  </div>






</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import { mapState } from 'vuex'

export default {

  computed: {
    contacts() {
      return this.$store.state.contacts.contacts
    }
  },

  name: 'Home',
   components: {
     ContactCard
   },



}
</script>
