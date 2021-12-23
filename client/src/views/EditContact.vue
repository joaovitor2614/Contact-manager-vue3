
<template>
  <div class="add-container">
      <div class="add-container__img">
          <h2 class="add-container__heading">
              Edit contact<small></small>

          </h2>
      </div>

    <ContactForm :handleSubmit="handleSubmit" :contact="contact" />
    <Loading v-if='this.$store.state.contacts.isLoading' />




  </div>
</template>



<script>
import Loading from '../components/Loading.vue'
import ContactForm from '../components/ContactForm.vue'
import { mapState } from 'vuex'

export default {
    components: { ContactForm, Loading },
    created() {
          const id = this.$route.params.id;

    },
      computed: {
          ...mapState(["isLoading"])
      },




    methods: {
      handleSubmit(data) {

         editedContact(data)
      },

    },

}
</script>
