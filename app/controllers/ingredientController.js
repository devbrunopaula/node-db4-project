const Ingredient = require('../Models/Ingredient')

class IngredientController {
  async index(req, res, next) {
    try {
      const ingredients = await Ingredient.all()
      res.status(200).json(ingredients)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = new IngredientController()
