/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line no-unused-vars
const {DataTypes} = require('sequelize')
// eslint-disable-next-line no-unused-vars
const {sequelize} = require('../util/database')

module.exports = {
  Goal: sequelize.define('goal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    weightGoal: DataTypes.INTEGER,
    startingWeight: DataTypes.INTEGER,
    calorieGoal: DataTypes.INTEGER
  })
}