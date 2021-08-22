const CustomError = require('./custom')

class InternalServerError extends CustomError {
  constructor(businessStatusCode) {
    super(businessStatusCode || 'internal_error_server_500', 500)
  }
}

module.exports = InternalServerError
