const CustomError = require('./custom')

class ForbiddenError extends CustomError {
  constructor(businessStatusCode) {
    super(businessStatusCode || 'forbidden_403', 403)
  }
}

module.exports = ForbiddenError
