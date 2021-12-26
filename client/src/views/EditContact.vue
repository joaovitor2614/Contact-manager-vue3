
<template v-cloack>
  <div class="add-container">
      <div class="add-container__img">
          <h2 class="add-container__heading">
              Edit contact<small></small>

          </h2>
      </div>

    <ContactForm
    :handleSubmit="handleSubmit"
    :contact="contact"



    />
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
       contact() {
         const contacts = this.$store.state.contacts.contacts
         const id = this.$route.params.id
         return contacts.find(ct => ct._id == id)
       }


    }
}




</script>
