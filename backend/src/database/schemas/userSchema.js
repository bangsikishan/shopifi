const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        email: true
    },
    phone: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8,"Password length must be of 8 characters"],
    }
});

module.exports = model('User', userSchema);