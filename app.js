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

// 設定第一個首頁路由
app.get('/', (req, res) => {
  res.send('hello world！')
})

// 設定 express port 3000
app.listen(3000, () => {
  console.log('App is running')
})