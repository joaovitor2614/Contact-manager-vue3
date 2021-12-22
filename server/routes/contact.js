const express = require('express');
const faker = require('faker');
const Contact = require('../models/Contact')
const router = express.Router()

router.get('/', async (req, res) => {


    try {
         const contacts = await Contact.find()
         res.json(contacts)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})

//method POST /api/contact
//desc add contact
// Private
router.post('/', async (req, res) => {


    try {
        console.log('back end', req.body)
         const newContact = new Contact({

             ...req.body
         })

         await newContact.save()
         res.json(newContact)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})

// method POST
// function create fake contact data
// route /contact/fake
router.post('/fake/:amount', async (req, res) => {

     const { amount } = req.params

    try {
         const addedContacts = []
            for (let i = 0; i < amount; i++) {
                const contactData = {

                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.phoneNumber(),
                    address: faker.fake("{{address.country}}, {{address.city}} - {{address.streetAddress}}"),
                    avatar: faker.image.people()
                }

                const newFakeContact = new Contact({
                    ...contactData
                })


                await newFakeContact.save();
                addedContacts.push(newFakeContact)
            }

         res.json(addedContacts)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})

router.delete('/:contact_id', async (req, res) => {
    const { contact_id } = req.params;

    try {
        const contact = await Contact.findById(contact_id)
        if (!contact) {
            return res.status(400).json({ errors: [{ msg: 'Contact was not found' }] })
        }
        if (contact.user.toString() !== req.user.id) {
            return res.status(400).json({ errors: [{ msg: 'Authorization denied' }] })
        }
        await contact.remove();
        res.json({ msg: 'Contact was removed' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})

//method PUT /api/contact/:contact_id
//desc edit contact
// Private
router.put('/:contact_id', async (req, res) => {
    const { contact_id } = req.params;

    try {
        const contact = await Contact.findById(contact_id)
        if (!contact) {
            return res.status(400).json({ errors: [{ msg: 'Contact was not found' }] })
        }
        if (contact.user.toString() !== req.user.id) {
            return res.status(400).json({ errors: [{ msg: 'Authorization denied' }] })
        }
        await Contact.findOneAndUpdate({ _id: contact_id}, req.body);
        const newContact = await Contact.findById(contact_id)
        res.json(newContact);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})

module.exports = router