const db = require('../db')
const { Product } = require('../models/models')

class productController {
    // реализация запроса через sequelize models
    async createProduct(req, res) {
        try {
            const { name, date, price, amount, shopId } = req.body
            const product = await Product.create({ name, date, price, amount, shopId })
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: error.message ? error.message : "ошибка в создании нового продукта (" })
        }
    }
    // реализация запросов через sequelize.query()
    async getProduct(req, res) {
        try {
            const product = await db.query(`SELECT * FROM products`)
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: error.message ? error.message : "ошибка в получении всех продуктов (" })
        }

    }
    async getOneProduct(req, res) {
        try {
            const { id } = req.params
            const product = await db.query(`SELECT * FROM products WHERE id = ${id}`)
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: error.message ? error.message : "ошибка в создании нового магазина (" })
        }
    }
    async updateProduct(req, res) {
        try {
            const { id, name, date, price, amount } = req.body
            const product = await db.query(`UPDATE products SET name='${name}', date='${date}', price='${price}', amount='${amount}' WHERE id=${id} RETURNING *`)
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: error.message ? error.message : "ошибка в создании нового магазина (" })
        }

    }
    async deleteProduct(req, res) {
        try {
            const { id } = req.params
            const product = await db.query(`DELETE FROM products WHERE id = ${id}`)
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json({ message: error.message ? error.message : "ошибка в создании нового магазина (" })
        }
    }
}
module.exports = new productController()
