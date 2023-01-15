const express = require('express')
const indexRoutes = require('./src/routes/indexRoutes')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/', indexRoutes)

app.listen(PORT, console.log(`SERVIDOR EN PUERTO: ${PORT}...`))