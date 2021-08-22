const CustomError = require('./custom')

class NotFoundError extends CustomError {
  constructor(businessStatusCode) {
    super(businessStatusCode || 'not_found_404', 404)
  }
}

module.exports = NotFoundError
