exports.up = async function (knex) {
  await knex.schema.createTable('recipe', (table) => {
    table.increments('id')
    table.varchar('name', 255).notNull().unique()
    table.varchar('description', 255).notNull()
    table.varchar('instruction', 255).notNull()
    table.time('prep_time')
    table.time('cook_time')
  })
  await knex.schema.createTable('measurement', (table) => {
    table.increments('id')
    table.varchar('name', 255).notNull().unique()
  })
  await knex.schema.createTable('ingredient', (table) => {
    table.increments('id')
    table.varchar('name', 255).notNull().unique()
    table.float('qty').notNull()
    table
      .integer('measurement_id')
      .notNull()
      .references('id')
      .inTable('measurement')
      .unsigned()
  })
  await knex.schema.createTable('recipe_ingredient', (table) => {
    table.integer('recipe_id').references('id').inTable('recipe').unsigned()
    table
      .integer('ingredient_id')
      .references('id')
      .inTable('ingredient')
      .unsigned()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipe_ingredient')
  await knex.schema.dropTableIfExists('ingredient')
  await knex.schema.dropTableIfExists('measurement')
  await knex.schema.dropTableIfExists('recipe')
}
