const express = require('express')
const router = express.Router()

const WelcomeController = require('../app/controllers/WelcomeController')
const recipeController = require('../app/controllers/recipeController')
const ingredientController = require('../app/controllers/ingredientController')

router.route('/').get(WelcomeController.index)
router.route('/recipes').get(recipeController.index)
router.route('/recipes/:id/list').get(recipeController.list)
router.route('/ingredients').get(ingredientController.index)

module.exports = router
