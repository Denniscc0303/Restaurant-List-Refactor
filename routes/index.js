// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)

// 引入 restaurants 模組程式碼
const restaurants = require('./modules/restaurants')
// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組
router.use('/restaurants', restaurants)

// 引入 search 模組程式碼
const search = require('./modules/search')
// 將網址結構符合 /restaurants 字串開頭的 request 導向 search 模組
router.use('/search', search)

// 引入 sort 模組程式碼
const sort = require('./modules/sort')
// 將網址結構符合 /restaurants 字串開頭的 request 導向 sort 模組
router.use('/sort', sort)

// 匯出路由器
module.exports = router