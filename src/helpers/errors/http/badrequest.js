const CustomError = require('./custom')

class BadRequestError extends CustomError {
  constructor(businessStatusCode) {
    super(businessStatusCode || 'bad_request_400', 400)
  }
}

module.exports = BadRequestError
