
<template>
  <div class="add-container">
      <div class="add-container__img">
          <h2 class="add-container__heading">
              Create Contact<small></small>
          </h2>
      </div>

    <ContactForm :handleSubmit="handleSubmit" />


  </div>
</template>



<script>

import ContactForm from '../components/ContactForm.vue'
export default {
    components: { ContactForm },
    methods: {
      handleSubmit(data) {
         console.log(data)
         createContact(data)
      },


    }
}
</script>
