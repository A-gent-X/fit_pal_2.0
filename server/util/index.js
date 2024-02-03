require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {PORT} = process.env

const app = express()

app.use(cors())

app.listen(PORT, console.log(`Activate App ${PORT}!`))