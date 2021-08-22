const logLevel = process.env.LOG_LEVEL
const appName = process.env.APP_NAME
const logLevelEnum = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
}

const debug = function (action, data) {
  if (logLevelEnum[logLevel] <= 1) {
    console.debug(
      JSON.stringify({
        app: appName,
        action: action,
        level: 'debug',
        timestamp: new Date(),
        message: data,
      })
    )
  }
}

const info = function (action, data) {
  if (logLevelEnum[logLevel] <= 2) {
    console.info(
      JSON.stringify({
        app: appName,
        action: action,
        level: 'info',
        timestamp: new Date(),
        message: data,
      })
    )
  }
}

const warn = function (action, data) {
  if (logLevelEnum[logLevel] <= 3) {
    console.warn(
      JSON.stringify({
        app: appName,
        action: action,
        level: 'warn',
        timestamp: new Date(),
        message: data,
      })
    )
  }
}

const error = function (action, data) {
  if (logLevelEnum[logLevel] <= 4) {
    console.error(
      JSON.stringify({
        app: appName,
        action: action,
        level: 'error',
        timestamp: new Date(),
        message: data,
      })
    )
  }
}

module.exports = {
  debug,
  info,
  warn,
  error,
}
