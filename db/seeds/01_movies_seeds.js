exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function() {
      // Inserts seed entries
      return knex('cities').insert([
        { id: 1, name: "Barcelona" },
        { id: 2, name: "Agan" },
        { id: 3, name: "Rome" },
        { id: 4, name: "Florence" },
        { id: 5, name: "New York" }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('cities_id_seq', (SELECT MAX(id) from cities));`
      )
    })
}