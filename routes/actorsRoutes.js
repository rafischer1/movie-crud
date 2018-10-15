const express = require('express')
const router = express.Router()
const knex = require('../knex')


// READ ALL records for actors
router.get('/', (req, res, next) => {
  knex('actors')
    .then(records => res.send(records))

})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  knex('actors')
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
    name: req.body.name,
    bio: req.body.bio,
    photo: req.body.photo
  }

  knex('actors')
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
  knex('actors')
    .where('id', id)
    .then(records => {
      //if found -- go ahead and UPDATE
      if (records.length > 0) {
        let updatedRecord = records[0]
        if (req.body.name) {
          updatedRecord.name = req.body.name
        }
        if (req.body.bio) {
          updatedRecord.bio = req.body.bio
        }
        if (req.body.photo) {
          updatedRecord.photo = req.body.photo
        }

        //update record in db
        knex('actors')
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
  knex('actors')
    .where('id', req.params.id)
    .first()
    .then((result) => {
      if (!result) next()
      knex('actors')
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