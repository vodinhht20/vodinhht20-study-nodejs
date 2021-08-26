const Product = require('../models/Couser');
const { mutipleMongooseToObject } = require('../../utill/mongoose');
class ProductController {
    // Phương thức GET /product/:slug
    show(req, res, next) {
            Product.findOne({ slug: req.params.slug })
                .then(product => {
                    res.json(product);
                })
                .catch(next);
        }
        // test(req, res) {
        //     Product.find({}, function(err, product) {    // in ra toàn bộ data
        //         if (!err) {
        //             res.json(product);
        //         }
        //     });
        // }
}

module.exports = new ProductController();