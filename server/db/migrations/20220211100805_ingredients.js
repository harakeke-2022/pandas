exports.up = function (knex) {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.string('name')
    table.string('type')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('indredients')
}
