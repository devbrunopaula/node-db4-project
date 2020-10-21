require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('../start/routes')

app.use('/api/v1/', routes)

module.exports = app
