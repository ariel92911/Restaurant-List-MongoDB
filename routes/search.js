const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

// 搜尋一筆 restaurant
router.get('/', (req, res) => {
  console.log(req.query)
  const keyword = req.query.keyword
  const regex = new RegExp(keyword, 'gi')

  const sortResult = {}
  sortResult[req.query.sortTarget] = req.query.sortType

  Restaurant.find((err, restaurant) => {
    if (err) return console.log(err)

    // return search result
    const searchResult = restaurant.filter(restaurant => {
      return restaurant.name.match(regex)
    })

    console.log(searchResult)
    return res.render('index', { restaurants: searchResult, keyword })
  })
})


module.exports = router