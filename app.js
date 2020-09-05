const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

const Restaurant = require('./models/restaurant') //載入Restaurane model

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//app.get('/', (req, res) => {
//  res.render('index', { restaurants: restaurantList.results })
//})

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})


app.get('/restaurants/:restaurant_id', (req, res) => {

  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)

  console.log('req.params.restaurant_id', req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})



app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    //修正search bar路由設定：將restaurant.title改為restaurant.name
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})


// setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})