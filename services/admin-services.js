const {
  Restaurant,
  Category
} = require('../models')

const adminServices = {
  getRestaurants: (req, callback) => {
    return Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(restaurants => {
        return callback(null, {
          restaurants
        })
      })
      .catch(err => callback(err))
  }
}

module.exports = adminServices
