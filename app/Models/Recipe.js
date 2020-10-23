const {where} = require('../../config/dbConfig')
const db = require('../../config/dbConfig')
class Recipe {
  async all() {
    return await db.select().from('recipe')
  }

  //   - `getShoppingList(recipe_id)`: should return a
  //list of all ingredients and quantities for a given recipe

  async getShoppingList(id) {
    return await db('recipe_ingredient as ri')
      .join('recipe as r', 'r.id', 'ri.recipe_id')
      .join('ingredient as i', 'i.id', 'ri.ingredient_id')
      .where('r.id', id)
      .select('i.name as igredient_name', 'i.qty')
  }
}

module.exports = new Recipe()
