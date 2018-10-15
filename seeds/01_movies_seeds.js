exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, title: "Rescue Dawn", release_date: 2006 },
        { id: 2, title: "Cobra Verde", release_date: 1987 },
        { id: 3, title: "Fitzcarraldo", release_date: 1982 },
        { id: 4, title: "Nosferatu the Vampyre", release_date: 1979 },
        { id: 5, title: "The Enigma of Kaspar Hauser", release_date: 1974 },
        { id: 6, title: "Bad Lieutenant: Port of Call New Orleans", release_date: 2009 },
        { id: 7, title: "Stroszek", release_date: 1977 },
        { id: 8, title: "Heart of Glass", release_date: 1976 },
        { id: 9, title: "Woyzeck", release_date: 1979 }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('movies_id_seq', (SELECT MAX(id) from movies));`
      )
    })
}