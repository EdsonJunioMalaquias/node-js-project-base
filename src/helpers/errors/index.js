const BadRequestError = require('./http/badrequest')
const ForbiddenError = require('./http/forbidden')
const InternalServerError = require('./http/internalservererror')
const NotFoundError = require('./http/notfound')
const UnauthorizedError = require('./http/unauthorized')
const CustomError = require('./http/custom')

module.exports = {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  CustomError,
}
