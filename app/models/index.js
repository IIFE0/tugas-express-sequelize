const Sequelize = require("sequelize")

const sequelize = new Sequelize("biodata_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.biodata = require("./biodataModel")(sequelize, Sequelize)

module.exports = db
