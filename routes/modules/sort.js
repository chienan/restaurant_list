const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


// Set route to sort restaurants
router.get('/asc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name_en: 'asc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/desc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name_en: 'desc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/ratingdesc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ rating: 'desc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/ratingasc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ rating: 'asc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})




module.exports = router