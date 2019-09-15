const restaurantList = require('./restaurant.json')

function sortObj(obj) {
  return obj.sort((a, b) => a.rating - b.rating)
}

console.log(sortObj(restaurantList.results))