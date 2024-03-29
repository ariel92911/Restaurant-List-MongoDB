// routes/home.js
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

const { authenticated } = require('../config/auth')

// 設定首頁路由器
router.get('/', authenticated, (req, res) => {
  console.log(req.query)
  const sortResult = {}
  sortResult[req.query.sortTarget] = req.query.sortType
  Restaurant.find({ userId: req.user._id })
    .sort(sortResult)
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants: restaurants })
    })
})
module.exports = router