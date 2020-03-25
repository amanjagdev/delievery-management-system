const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    flat_number: {
        type: Number,
        required: true
    },
    product: [{
        product_name: {
            type: String
        },
        product_qty: {
            type: String
        }
    }]
});

module.exports = Product = mongoose.model('products', ProductSchema)