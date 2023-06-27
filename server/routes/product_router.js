const express = require('express')
const productController = require('../controllers/product_controller')

const productRouter = express.Router()

productRouter.post('/product', productController.createProduct)
productRouter.get('/product', productController.getProduct)
productRouter.get('/product/:id', productController.getOneProduct)
productRouter.put('/product', productController.updateProduct)
productRouter.delete('/product/:id', productController.deleteProduct)

module.exports = productRouter