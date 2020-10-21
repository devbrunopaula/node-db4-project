const express = require('express')
const router = express.Router()

const WelcomeController = require('../app/controllers/WelcomeController')

router.route('/').get(WelcomeController.index)

module.exports = router
