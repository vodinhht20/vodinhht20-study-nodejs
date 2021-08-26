const Product = require('../models/Couser');
class NewsController {
  // Phương thức GET / News
  index(req, res, next) {
    Product.find({})
      .then((Product) => res.render('news'))
      .catch(next);
  }

  // Phương thức GET / News/slug

  slug(req, res) {
    res.send('Slug');
  }
  error(req, res) {
    res.render('error', { title: 'Lỗi 404' });
  }
}

module.exports = new NewsController();
