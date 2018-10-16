'use strict';
// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/herzog_movies'
  },
  test: {},
  production: {
    client: 'pg',
    connection: 'postgres://ocfmpkflmgujav:7816910621ab087eba079f9e5167c39e78856bb251474d0d3decd4e18ae3a4d7@ec2-184-72-234-230.compute-1.amazonaws.com:5432/d13g2sisjcmhdo',

  }
}