const express = require('express')
const path = require('path')

const ingRoutes = require('./routes/ingredients')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/ingredients', ingRoutes)

module.exports = server
