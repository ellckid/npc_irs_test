const { db } = require('../db')
const { Shop } = require('../models/models')

class ShopController {
  async createShop(req, res) {
    try {
      const { name, date, balance, workers } = req.body
      const shop = await Shop.create({ name, date, balance, workers })
      return res.status(200).json(shop)
    } catch (error) {
      return res.status(500).json({ message: error.message ? error.message : "ошибка в создании нового магазина (" })
    }
  }
  async getShop(req, res) {
    try {
      const shop = await Shop.findAll()
      return res.status(200).json(shop)
    } catch (error) {
      return res.status(500).json({ message: error.message ? error.message : "ошибка в получении магазинов (" })
    }
  }
  async getOneShop(req, res) {
    try {
      const { id } = req.params
      const shop = await Shop.findOne({ where: { id } })
      return res.status(200).json(shop)
    } catch (error) {
      return res.status(500).json({ message: error.message ? error.message : "ошибка в получении магазина (" })
    }

  }
  async updateShop(req, res) {
    try {
      const { id, name, date, balance, workers } = req.body
      const shop = await Shop.update({ name, date, balance, workers }, { where: { id } })
      return res.status(200).json(shop)
    } catch (error) {
      return res.status(500).json({ message: error.message ? error.message : "ошибка в обновлении данных магазина (" })
    }
  }
  async deleteShop(req, res) {
    try {
      const { id } = req.params
      const shop = await Shop.destroy({ where: { id } })
      return res.status(200).json(shop)
    } catch (error) {
      return res.status(500).json({ message: error.message ? error.message : "ошибка в обновлении данных магазина (" })
    }
  }
}
module.exports = new ShopController()