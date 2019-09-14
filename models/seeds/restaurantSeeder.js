const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantJson = require('./restaurant.json')
const userJson = require('./user.json')
const User = require('../user')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')
  // load json data into database
  User.create(userJson.results).then(() =>

    // 找到 user1 並將 _id 加至 restaurantJson 
    User.find({ email: 'user1@example.com' }, (err, user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user[0].password, salt, (err, hash) => {
          if (err) throw err
          user[0].password = hash
          user[0].save()
        })
      })

      restaurantJson.results[0]["userId"] = user[0]._id.toString()
      restaurantJson.results[1]["userId"] = user[0]._id.toString()
      restaurantJson.results[2]["userId"] = user[0]._id.toString()
    })

  ).then(() =>

    // 找到 user2 並將 _id 加至 restaurantJson
    User.find({ email: 'user2@example.com' }, (err, user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user[0].password, salt, (err, hash) => {
          if (err) throw err
          user[0].password = hash
          user[0].save()
        })
      })

      restaurantJson.results[3]["userId"] = user[0]._id.toString()
      restaurantJson.results[4]["userId"] = user[0]._id.toString()
      restaurantJson.results[5]["userId"] = user[0]._id.toString()
    })

  ).then(() =>

    // 將符合條件的 restaurantJson 資料新增至 collection
    Restaurant.create(restaurantJson.results)

  )

  console.log('Data create complete!')
})