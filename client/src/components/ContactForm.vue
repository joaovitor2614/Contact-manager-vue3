
<template>
  <form class="contact-form" @submit.prevent="handleSubmit(contactData)">
    <div class="contact-form__group">
      <div class="contact-form__input">
          <input
           type="text"
           class="input-field"
           v-model="contactData.firstName"
          />
          <label class="input-label">First name</label>
       </div>
       <div class="contact-form__input">
          <input
           v-model="contactData.lastName"
           type="text"
           class="input-field"
           />
          <label class="input-label">Last name</label>
      </div>

    </div>
    <div class="contact-form__group">
      <div class="contact-form__input">
        <input
         v-model="contactData.email"
         type="text"
         class="input-field"
         />
        <label class="input-label">Email</label>
      </div>
      <div class="contact-form__input">
        <input
         v-model="contactData.address"
         type="text"
         class="input-field"
         />
        <label class="input-label">Address</label>
      </div>

    </div>


    <div class="contact-form__input">
       <input v-model="contactData.phone" type="text" class="input-field" />
       <label class="input-label">Phone number</label>
    </div>





    <div class="contact-form__action">
      <button
      class="action-btn"
      :disabled="isLoading"



      >
             Adicionar contato
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['handleSubmit', 'isLoading'],
  data() {
    return {
      contactData: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone:  '',
      }

    }
  },

  methods: {
    ...mapActions(["createContact, editContact"]),
  }
}
</script>
