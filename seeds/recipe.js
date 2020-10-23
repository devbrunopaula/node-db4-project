exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'Hamburger',
          description: 'Deep Fried',
          instruction: 'deep fry it for 20min',
          prep_time: 20,
          cook_time: 23,
        },
      ])
    })
}
