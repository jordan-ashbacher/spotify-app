const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const sessionMiddleware = require('./modules/session-middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(sessionMiddleware)

app.use(express.static('build'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})