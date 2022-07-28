const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = model('Product', productSchema);