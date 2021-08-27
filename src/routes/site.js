const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/intro', siteController.intro);
router.use('/:error', siteController.error);
router.use('/', siteController.index);

module.exports = router;
