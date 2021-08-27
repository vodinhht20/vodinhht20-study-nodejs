const Product = require('../models/Couser');
const { MongooseToOject } = require('../../util/moongose');

class ProductsController {
    // Phương thức GET / News/slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((Product) => {
                res.render('product/show', { Product: MongooseToOject(Product) });
            })
            .catch(next);
    }
    create(req, res) {
        res.render('product/create');
    }
    store(req, res, next) {
        const dataForm = req.body;
        dataForm.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const product = new Product(req.body);
        product.save()
            .then(() => { res.redirect('/') })
            .catch(error => {

            })
    }
}

module.exports = new ProductsController();