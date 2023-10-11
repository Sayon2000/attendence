const Sequelize = require('sequelize')

const sequelize = new Sequelize('attendence' ,'root', 'root',{
    host :"localhost",
    dialect :"mysql"
})

module.exports = sequelize;