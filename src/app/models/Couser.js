const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const Product = new Schema({
    content: String,
    image: String,
    name: String,
    price: String,
    videoID: String,
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
}, );
// add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});
module.exports = mongoose.model('Product', Product, 'product');