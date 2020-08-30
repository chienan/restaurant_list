const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  //paste the restaurant data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
})


app.get('/restaurants/:restaurant_id', (req, res) => {

  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)

  console.log('req.params.restaurant_id', req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

//出現錯誤的search bar路由設定
//app.get('/search', (req, res) => {
//  const keyword = req.query.keyword
//  const restaurants = restaurantList.results.filter(restaurant => {
//    return restaurant.title.includes(keyword)
//  })
//  res.render('index', { restaurants: restaurants })
//})


// setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})