const express = require('express')               // 載入 express
const app = express()                            // 建立 express instance
const mongoose = require('mongoose')

// 引用 express-handlebars
const exphbs = require('express-handlebars')

// 引用 body-parser
const bodyParser = require('body-parser')

// 引用 method-override
const methodOverride = require('method-override')

// 設定 bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 method-override
app.use(methodOverride('_method'))

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

// 載入路由器
app.use('/', require('./routes/home'))
app.use('/restaurant', require('./routes/restaurants'))
app.use('/users', require('./routes/user'))

// 設定 express port 3000
app.listen(3000, () => {
  console.log('App is running')
})