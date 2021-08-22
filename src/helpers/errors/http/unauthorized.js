const CustomError = require('./custom')

class UnauthorizedError extends CustomError {
  constructor(businessStatusCode) {
    super(businessStatusCode || 'unauthorized_401', 401)
  }
}

module.exports = UnauthorizedError
