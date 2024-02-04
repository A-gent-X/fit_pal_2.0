/*eslint no-undef: "error"*/
/*eslint-env node*/

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')


const {User} = require('./models/user')
// eslint-disable-next-line no-unused-vars
const {Goal} = require('./models/goal') 
// eslint-disable-next-line no-unused-vars
const {Meals} = require('./models/meals') 
// eslint-disable-next-line no-unused-vars
const {Workouts} = require('./models/workouts') 
// eslint-disable-next-line no-unused-vars
const {ProgressTracker} = require('./models/progressTracker') 

User.hasMany(Goal)
Goal.belongsTo(User)

User.hasMany(Meals)
User.hasMany(Workouts)
User.hasMany(ProgressTracker)

Meals.belongsTo(User)
Workouts.belongsTo(User)
ProgressTracker.belongsTo(User)

const {PORT} = process.env

const app = express()

app.use(cors())
app.use(express.json())

sequelize.sync()
.then(() => app.listen(PORT, console.log(`Activate App ${PORT}!`)))
.catch(err => console.log(err))