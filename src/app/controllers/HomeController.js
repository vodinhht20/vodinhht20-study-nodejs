class HomeController {
  // Phương thức GET / News
  index(req, res) {
    res.render('home', { title: 'Trang Chủ' });
  }
  intro(req, res) {
    res.render('intro', { title: 'Giới Thiệu' });
  }
  error(req, res) {
    res.render('error', { title: 'Lỗi 404' });
  }
}

module.exports = new HomeController();
