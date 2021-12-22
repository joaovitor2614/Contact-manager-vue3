
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
        max: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        max: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        max: 30,

    },
    phone: {
        type: String,
        minLength: 7,
        maxLength: 50,
    },
    address: {
        type: String,

        maxLength: 140,

    },
    avatar: {
        type: String,

        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = Contact = mongoose.model('contacts', ContactSchema)