const { Sequelize } = require('sequelize')

module.exports = new Sequelize('npc_irs_bd', 'postgres', 'artel321', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
}
)


