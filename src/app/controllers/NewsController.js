const Product = require('../models/Couser');
class NewsController {
    // Phương thức GET / News
    index(req, res) {
            // res.render('news', { title: 'Tin Tức' });
            Product.find({}, function(err, Product) {
                if (!err) {
                    res.json(Product[0]);
                } else {
                    res.status(400).json({ error: 'Lỗi' });
                }
            });
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