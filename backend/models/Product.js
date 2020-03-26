const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    fno: {
        type: Number
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