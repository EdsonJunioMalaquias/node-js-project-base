const CustomError = require('../helpers/errors/http/custom')
const logger = require('../helpers/log')
const expressValidation = require('express-validation')

const errorMiddleware = async (err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    return res.status(400).json({
      error: {
        code: err.errors[0].message[0],
        message: req.polyglot.t(err.errors[0].message[0]),
      },
      requestId: req.id,
    })
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode()).json({
      error: {
        code: err.businessCode(),
        message: req.polyglot.t(err.businessCode()),
      },
      requestId: req.id,
    })
  }

  logger.error('Middleware.Error', {
    stack: err.stack,
    message: err.message,
    path: req.path,
  })

  if (process.env.NODE_ENV === 'development') {
    throw err
  }

  return res.status(500).json({
    error: {
      code: 'internal_server_error_500',
      message: req.polyglot.t('internal_server_error_500'),
    },
    requestId: req.id,
  })
}

module.exports = errorMiddleware
