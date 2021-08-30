const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/', MeController.me);
router.get('/trash', MeController.trash);

module.exports = router;