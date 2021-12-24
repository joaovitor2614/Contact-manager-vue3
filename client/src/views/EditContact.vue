
<template v-cloack>
  <div class="add-container">
      <div class="add-container__img">
          <h2 class="add-container__heading">
              Edit contact<small></small>

          </h2>
      </div>

    <ContactForm :handleSubmit="handleSubmit" />
    <Loading v-if='this.$store.state.contacts.isLoading' />




  </div>
</template>



<script>
import Loading from '../components/Loading.vue'
import ContactForm from '../components/ContactForm.vue'
import { mapState } from 'vuex'

export default {
    components: { ContactForm, Loading },
      computed: {
          ...mapState(["isLoading"]),
          contactToEdit() {
            const id = this.$route.params.id;
            const contacts = this.$store.state.contacts.contacts;
            console.log(contacts)
            const contactId = contacts.find(contact => contact._id == id);

            return contactId
          }
      },




    methods: {
      handleSubmit(data) {

         editedContact(data)
      },

    },

}
</script>
