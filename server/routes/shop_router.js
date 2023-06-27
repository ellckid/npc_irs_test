const express = require('express')
const shopController = require('../controllers/shop_controller')

const shopRouter = express.Router()

shopRouter.post('/shop', shopController.createShop)
shopRouter.get('/shop', shopController.getShop)
shopRouter.get('/shop/:id', shopController.getOneShop)
shopRouter.put('/shop', shopController.updateShop)
shopRouter.delete('/shop/:id', shopController.deleteShop)

module.exports = shopRouter