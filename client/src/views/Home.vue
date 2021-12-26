<template>
  <Filters />
  <div class="home__cards">

    <ContactCard
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
      :removeContact="removeContact"

      />

  </div>






</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import Filters from '../components/Filters.vue'
import { mapActions } from 'vuex'
import selectContacts from '../selectors/contacts'
export default {
  computed: {
    contacts() {
       const filters = this.$store.state.filters;
       const contactsStore = this.$store.state.contacts.contacts;
       const filteredContacts = selectContacts(contactsStore, filters);
       return filteredContacts;
    }
  },
  name: 'Home',
   components: {
     ContactCard,
     Filters
   },

     methods: {
       ...mapActions(["removeContact"]),
        ...mapActions(["createContact"])

  }


}
</script>