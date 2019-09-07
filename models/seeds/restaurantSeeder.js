const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantJson = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')
})

db.once('open', () => {
  console.log('db connected!')

  Restaurant.create(restaurantJson.results)


  console.log('done')

})