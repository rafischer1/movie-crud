exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors').del()
    .then(function() {
      // Inserts seed entries
      return knex('actors').insert([
        { id: 1, name: "Klaus Kinski", movies_id: 2 },
        { id: 2, name: "Christian Bale", movies_id: 1 },
        { id: 3, name: "Isabelle Adjani", movies_id: 4 },
        { id: 4, name: "Nicholas Cage", movies_id: 6 },
        { id: 5, name: "Bruno S", movies_id: 5 },
        { id: 6, name: "Josef Bierbichler", movies_id: 8 },
        { id: 7, name: "Klaus Kinski", movies_id: 3 },
        { id: 8, name: "Klaus Kinski", movies_id: 9 },
        { id: 9, name: "Bruno S", movies_id: 7 },
        { id: 10, name: "Walter Ladengast", movies_id: 5 },
        { id: 11, name: "Steve Zahn", movies_id: 1 },
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('actors_id_seq', (SELECT MAX(id) from actors));`
      )
    })
}