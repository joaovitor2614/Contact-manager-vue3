
<template>
  <div class="add-container">
      <div class="add-container__img">
          <h2 class="add-container__heading">
              Create Contact<small></small>

          </h2>
      </div>

    <ContactForm :handleSubmit="handleSubmit" :isLoading="this.$store.state.contacts.isLoading"  />
    <Loading v-if='this.$store.state.contacts.isLoading'  />




  </div>
</template>



<script>
import Loading from '../components/Loading.vue'
import ContactForm from '../components/ContactForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { ContactForm, Loading },



    methods: {
      handleSubmit(data) {
         console.log(data)
         createContact(data)
      },
        methods: {
    ...mapActions(["createContact"]),
  }

    },

}
</script>
