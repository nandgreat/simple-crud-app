const express = require('express')
const router = express.Router();

const { addProduct, singleProduct, deleteProduct, productList, updateProduct } = require('../controllers/product.controller');

router.post('/', addProduct)
router.get('/:id', singleProduct)
router.delete('/:id', deleteProduct)
router.get('/', productList)
router.delete('/:id', updateProduct)

module.exports = router