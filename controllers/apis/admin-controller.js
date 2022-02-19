const adminServices = require('../../services/admin-services')

const adminController = {
  // 只控制流程，要傳到哪裡去
  getRestaurants: (req, res, next) => {
    adminServices.getRestaurants(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = adminController
