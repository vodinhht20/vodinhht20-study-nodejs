const express = require('express');
const router = express.Router();

const ProductController = require('../app/controllers/ProductController');

router.get('/create', ProductController.create);
router.post('/store', ProductController.store);
router.get('/:id/edit', ProductController.edit);
router.put('/:id', ProductController.update);
router.patch('/:id/restore', ProductController.restore);
router.delete('/:id', ProductController.delete);
router.delete('/:id/force', ProductController.forceDelete);
router.get('/:slug', ProductController.show);

module.exports = router;