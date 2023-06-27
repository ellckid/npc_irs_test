const express = require('express')
const cors = require('cors')

const sequelize = require('./db')
const models = require('./models/models')
const shopRouter = require('./routes/shop_router')
const productRouter = require('./routes/product_router')

const PORT = process.env.PORT || 5100

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', shopRouter)
app.use('/api', productRouter)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()

