// routes/home.js
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

// 設定首頁路由器
router.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', { restaurants: restaurants })  // 將資料傳給 index 樣板
  })
})
module.exports = router