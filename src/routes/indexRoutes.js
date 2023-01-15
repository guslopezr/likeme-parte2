const express = require('express')
const indexController = require('../controller/indexController')
const methodRoutes = require('./methodRoutes')
const app = express()

app.get('/', indexController.show)
app.use('/posts', methodRoutes)

app.use('/*', indexController.notFound)


module.exports = app