const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.use('/intro', homeController.intro);
router.use('/:error', homeController.error);
router.use('/', homeController.index);

module.exports = router;
