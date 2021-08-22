const { promisify } = require('util')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided!' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET)
    const { id, name } = decoded

    req.user = { id, name }

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' })
  }
}
