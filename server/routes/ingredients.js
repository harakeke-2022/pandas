const express = require('express')

const db = require('../db/ingredients')

const router = express.Router()

router.get('/', (req, res) => {
  db.getIngredients()
    .then(results => {
      res.json({ ingredients: results.map(ingredient => ingredient) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
