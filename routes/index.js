// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組程式碼
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')

// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)

// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組 
router.use('/restaurants', restaurants)

router.use('/sort', sort)

// 匯出路由器
module.exports = router