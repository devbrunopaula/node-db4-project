const db = require('../../config/dbConfig')

class Ingredient {
  async all() {
    return await db('recipe_ingredient as ri')
      .join('recipe as r', 'r.id', 'ri.recipe_id')
      .join('ingredient as i ', 'i.id', 'ri.ingredient_id')
      .join('measurement as m ', 'm.id', 'i.measurement_id')
      .where('r.id', 4)
      .select([
        'r.name',
        'i.qty',
        'i.name as Ingredient Name',
        'm.name as Measuremt Name',
      ])
  }
  //   async all() {
  //     return await db('ingredient')
  //   }
}

module.exports = new Ingredient()
