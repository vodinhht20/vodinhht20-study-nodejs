const Product = require('../models/Couser');
const { mutipleMongooseToOject } = require('../../util/moongose');

class ProductsController {
  me(req, res, next) {
    Product.find({})
      .then((Product) => {
        res.render('me/me', {
          title: 'Trang chủ | Medical Center',
          Product: mutipleMongooseToOject(Product),
        });
      })
      .catch(next);
  }
}

module.exports = new ProductsController();
