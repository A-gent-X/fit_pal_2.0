/*eslint no-undef: "error"*/
/*eslint-env node*/

// eslint-disable-next-line no-unused-vars
const {DataTypes} = require('sequelize')
// eslint-disable-next-line no-unused-vars
const {sequelize} = require('../util/database')

module.exports = {
  ProgressTracker: sequelize.define('progress_tracker', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    currentWeight: DataTypes.INTEGER,
    date: DataTypes.DATE
  })
}