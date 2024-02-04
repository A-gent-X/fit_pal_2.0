/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line no-unused-vars
const {DataTypes} = require('sequelize')
// eslint-disable-next-line no-unused-vars
const {sequelize} = require('../util/database')

module.exports = {
  Meals: sequelize.define('meals', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    mealDescription: DataTypes.STRING(5000),
    calories: DataTypes.INTEGER,
    date: DataTypes.DATE,
    imgURL: DataTypes.STRING(5000),
  })
}