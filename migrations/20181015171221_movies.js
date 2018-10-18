exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments('id').primary().notNullable()
    table.string('title').notNullable().defaultTo('')
    table.integer('release_date').notNullable()
    table.string('photo').notNullable().defaultTo('https://i.kinja-img.com/gawker-media/image/upload/s--PZM7wOKs--/c_scale,f_auto,fl_progressive,q_80,w_800/hcu4pwadrr25bqi2pyll.jpg')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()

  })
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE movies`
  return knex.raw(dropQuery)
};