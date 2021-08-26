const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    title: String,
    content: String,
    image: Date
});
module.exports = mongoose.model('product', Product, 'product');