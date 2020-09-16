const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


//新增餐廳資料
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  let { name, name_en, category, phone, image, location, rating, google_map, description } = req.body

  if (!image.length) {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
  }

  return Restaurant.create({ name, name_en, category, phone, image, location, rating, google_map, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(console.log(error)))
})



//瀏覽特定餐廳資訊
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(console.log(error)))
})


//修改特定餐廳
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(console.log(error)))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant = Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})


//刪除特定餐廳
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



module.exports = router