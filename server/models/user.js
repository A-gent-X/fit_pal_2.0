/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line no-unused-vars
const {DataTypes} = require('sequelize')
// eslint-disable-next-line no-unused-vars
const {sequelize} = require('../util/database')

module.exports = {
  User: sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: DataTypes.STRING(5000),
    weight: DataTypes.INTEGER,
    volume: DataTypes.INTEGER,
    date: DataTypes.DATE,
    imgURL: DataTypes.STRING(5000)
  })
}