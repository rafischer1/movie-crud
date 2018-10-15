const express = require('express')
const router = express.Router()
const knex = require('../knex')


// READ ALL records for movies
router.get('/', (req, res, next) => {
  knex('movies')
    .then(records => {
      console.log(records[0])
      res.send(records)
    })
})

// READ ONE record for this table
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  knex('movies')
    .where('id', id)
    .then(records => res.send(records))
})

// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  // create a new creature
  //need POST body data in order to create new creature IDEA: req.body 
  // console.log(req.body.photo)
  //form validation goes here
  let newRecord = {
    title: req.body.title,
    release_date: req.body.release_date
  }

  knex('movies')
    .insert(newRecord)
    .returning('*')
    .then((result) => {
      res.status(201).send(result)
    })
    .catch((err) => {
      next(err)
    })
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  //using the given id look up if that records exists
  let id = req.params.id
  knex('movies')
    .where('id', id)
    .then(records => {
      //if found -- go ahead and UPDATE
      if (records.length > 0) {
        let updatedRecord = records[0]
        if (req.body.title) {
          updatedRecord.title = req.body.title
        }
        if (req.body.release_date) {
          updatedRecord.release_date = req.body.release_date
        }


        //update record in db
        knex('movies')
          .where('id', req.params.id)
          .update(updatedRecord)
          .returning('*')
          .then((resUpdate) => {
            res.send(resUpdate)
          })

      } else {
        throw new Error('Not Found!')
      }

    })
    .catch((err) => {
      next(err)
    })
})

// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  knex('movies')
    .where('id', req.params.id)
    .first()
    .then((result) => {
      if (!result) next()
      knex('movies')
        .del()
        .where('id', req.params.id)
        .then(() => {
          res.send(`ID ${req.params.id} deleted!`)
        })

    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router