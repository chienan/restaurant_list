
const Restaurant = require('../restaurant')
const restaurantData = require('./restaurant.json')

const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(Object.assign(restaurantData.results, restaurantData))
})
