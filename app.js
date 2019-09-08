const express = require('express')               // 載入 express
const app = express()                            // 建立 express instance
const mongoose = require('mongoose')

// 引用 express-handlebars
const exphbs = require('express-handlebars')

// 引用 body-parser
const bodyParser = require('body-parser')

// 設定 bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

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

// setting static files
app.use(express.static('public'))

// 設定路由
// Restaurant 首頁
app.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {                                 // 把 Todo model 所有的資料都抓回來
    if (err) return console.error(err)
    return res.render('index', { restaurants: restaurants })  // 將資料傳給 index 樣板
  })
})
// 列出全部 Restaurant
app.get('/restaurants', (req, res) => {
  return res.redirect('/')
})
// 新增一筆 Restaurant 頁面
app.get('/restaurant/new', (req, res) => {
  return res.render('new')
})
// 顯示一筆 Restaurant 的詳細內容
app.get('/restaurant/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('show', { restaurant: restaurant })
  })
})
// 新增一筆  Restaurant
app.post('/restaurant', (req, res) => {
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