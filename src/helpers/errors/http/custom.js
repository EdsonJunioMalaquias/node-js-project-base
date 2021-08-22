class CustomError extends Error {
  constructor(businessStatusCode, statusCode) {
    super(businessStatusCode)

    this.name = this.constructor.name
    this.status = statusCode
    this.code = businessStatusCode
  }

  statusCode() {
    return this.status
  }

  businessCode() {
    return this.code
  }
}

module.exports = CustomError
