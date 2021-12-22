<template>
   {{ contact }}
   <div class="contact-card">
       <div class="contact-card__info">
            <p><span>Phone: </span>21 988749262</p>
            <p><span>Address: </span>Phone: 21 988749262</p>
        </div>
        <div class="contact-card__footer">

             <img className='contact-card__footer-img card-img3'
             src="https://i.pinimg.com/originals/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg"
             alt="Contact picture" />

        </div>
        <h3 class="contact-card__footer-name">{{ contact.firstName }}</h3>

   </div>
</template>

<script>
  export default {
      props: ['contact'],
      name: 'ContactCard',

  }
</script>