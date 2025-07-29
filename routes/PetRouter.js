const express = require('express')
const router = express.Router()

const Pet = require('../models/pet')

router.get('/', async(req, res) =>{

  try {
    const petArrayDB = await Pet.find()
    res.render('pets', {petArray: petArrayDB})

  } catch (error) {
    console.log(error)
  }
})

module.exports = router
