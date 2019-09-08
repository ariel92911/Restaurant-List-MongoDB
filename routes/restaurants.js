// routes/todo.js
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

// 設定路由
// 新增一筆 Restaurant 頁面
router.get('/new', (req, res) => {
  return res.render('new')
})
// 顯示一筆 Restaurant 的詳細內容
router.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('show', { restaurant: restaurant })
  })
})
// 新增一筆  Restaurant
router.post('/', (req, res) => {
  // 建立 Restaurant model 實例
  const restaurant = new Restaurant({
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
  })
  // 存入資料庫
  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')  // 新增完成後，將使用者導回首頁
  })
})
// 修改 Restaurant 頁面
router.get('/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('edit', { restaurant: restaurant })
  })
})
// 修改 Restaurant
router.put('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    restaurant.name = req.body.name,
      restaurant.category = req.body.category,
      restaurant.image = req.body.image,
      restaurant.location = req.body.location,
      restaurant.phone = req.body.phone,
      restaurant.google_map = req.body.google_map,
      restaurant.rating = req.body.rating,
      restaurant.description = req.body.description,
      restaurant.save(err => {
        if (err) return console.error(err)
        return res.redirect(`/restaurant/${req.params.id}`)
      })
  })
})
// 刪除 Restaurant
router.delete('/:id/delete', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// 設定 /restaurant 路由
module.exports = router