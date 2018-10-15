exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, title: "Rescue Dawn", release_date: 2006, photo: 'https://resizing.flixster.com/M3vaLnF_ytC541gx3nUeUEmj7kE=/206x305/v1.bTsxMTI5Nzk0OTtqOzE3OTA1OzEyMDA7MTU1NzsyMDc2' },
        { id: 2, title: "Cobra Verde", release_date: 1987, photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Cobra_Verde_poster.jpg/220px-Cobra_Verde_poster.jpg' },
        { id: 3, title: "Fitzcarraldo", release_date: 1982, photo: 'https://images-na.ssl-images-amazon.com/images/I/51JwketnbpL.jpg' },
        { id: 4, title: "Nosferatu the Vampyre", release_date: 1979, photo: 'https://images-na.ssl-images-amazon.com/images/I/51VNNEEKrPL.jpg' },
        { id: 5, title: "The Enigma of Kaspar Hauser", release_date: 1974, photo: 'http://www.kennelco.com/wp-content/uploads/2016/06/The-Enigma-of-Kaspar-Hauser.jpg' },
        { id: 6, title: "Bad Lieutenant: Port of Call New Orleans", release_date: 2009, photo: 'https://m.media-amazon.com/images/M/MV5BMTcyMzY0NTMzMF5BMl5BanBnXkFtZTcwMTc1MjY4Mg@@._V1_.jpg' },
        { id: 7, title: "Stroszek", release_date: 1977, photo: 'https://images-na.ssl-images-amazon.com/images/I/51wq640MNTL.jpg' },
        { id: 8, title: "Heart of Glass", release_date: 1976, photo: 'https://a.ltrbxd.com/resized/film-poster/3/4/5/7/3/34573-heart-of-glass-0-230-0-345-crop.jpg?k=4a8e01b23b' },
        { id: 9, title: "Woyzeck", release_date: 1979, photo: 'https://i.pinimg.com/originals/a3/61/58/a36158098e5b5bdbde86572c0de820b2.jpg' }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('movies_id_seq', (SELECT MAX(id) from movies));`
      )
    })
}