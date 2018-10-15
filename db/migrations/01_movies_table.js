exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', table => {
    table.increments('id').primary().notNullable()
    table.string('name').notNullable().defaultTo('')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()

  })
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE cities`
  return knex.raw(dropQuery)
};