const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    content: String,
    image: String,
    name: String,
    price: String,
    slug: String
});
module.exports = mongoose.model('product', Product, 'product');