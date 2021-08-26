const Product = require('../models/Couser');
const { mutipleMongooseToObject } = require('../../utill/mongoose');
class HomeController {
  // Phương thức GET / News
  index(req, res, next) {
    Product.find({})
      .then((product) => {
        res.render('home', {
          product: mutipleMongooseToObject(product),
        });
      })
      .catch(next);
  }

  intro(req, res) {
    res.render('intro', { title: 'Giới Thiệu' });
  }
  error(req, res) {
    res.render('error', { title: 'Lỗi 404' });
  }
}

module.exports = new HomeController();
