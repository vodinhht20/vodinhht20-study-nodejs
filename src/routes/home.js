const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.get('/intro', homeController.intro);
router.get('/:error', homeController.error);
router.get('/', homeController.index);

module.exports = router;
