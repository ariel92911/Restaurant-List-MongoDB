const express = require('express')               // 載入 express
const app = express()                            // 建立 express instance
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true })

// mongoose 連線後透過 mongoose.connection 拿到 Connection 的物件
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 載入 restaurant model
const Restaurant = require('./models/restaurant')

// 設定路由
// Restaurant 首頁
app.get('/', (req, res) => {
  res.send('Restaurant首頁')
})
// 列出全部 Restaurant
app.get('/restaurants', (req, res) => {
  res.send('列出所有 Restaurant')
})
// 新增一筆 Restaurant 頁面
app.get('/restaurant/new', (req, res) => {
  res.send('新增 Restaurant 頁面')
})
// 顯示一筆 Restaurant 的詳細內容
app.get('/restaurant/:id', (req, res) => {
  res.send('顯示 restaurant 的詳細內容')
})
// 新增一筆  Restaurant
app.post('/restaurant', (req, res) => {
  res.send('建立 Restaurant')
})
// 修改 Restaurant 頁面
app.get('/restaurant/:id/edit', (req, res) => {
  res.send('修改 Restaurant 頁面')
})
// 修改 Restaurant
app.post('/restaurant/:id/edit', (req, res) => {
  res.send('修改 Restaurant')
})
// 刪除 Restaurant
app.post('/restaurant/:id/delete', (req, res) => {
  res.send('刪除 Restaurant')
})

// 設定 express port 3000
app.listen(3000, () => {
  console.log('App is running')
})