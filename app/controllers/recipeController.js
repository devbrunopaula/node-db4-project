const Recipe = require('../Models/Recipe')
class RecipeController {
  async index(req, res, next) {
    try {
      const recipe = await Recipe.all()
      res.status(200).json(recipe)
    } catch (error) {
      console.log(error)
    }
  }

  async list(req, res, next) {
    const id = req.params.id
    try {
      const list = await Recipe.getShoppingList(id)
      res.status(200).json(list)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new RecipeController()
