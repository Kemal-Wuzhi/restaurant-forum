const jwt = require('jsonwebtoken')

const userController = {
  signIn: (req, res, next) => {
    console.log(req.user)
    try {
      const userData = req.user.toJSON()
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.json({
        status: 'success',
        data: {
          token,
          user: userData
        }
      })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = userController