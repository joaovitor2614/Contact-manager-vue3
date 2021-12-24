<template>

   <div class="contact-card">
       <div
       @click="removeContact(contact._id)"
       class="action-btn
       action-btn--small"
       >
         Remover

       </div>
       <div class="contact-card__info">
            <p><span>Phone: </span>{{ contact.phone }}</p>
            <p><span>Address: </span>{{ contact.address }}</p>
        </div>
        <div class="contact-card__footer">

             <img className='contact-card__footer-img card-img3'
             :src="contact.avatar"
             alt="Contact picture" />

        </div>
        <h3 class="contact-card__footer-name">{{ contact.firstName }} {{ contact.lastName }}</h3>

   </div>
</template>

<script>

  export default {
      props: ['contact', 'removeContact'],
      name: 'ContactCard',




  }
</script>