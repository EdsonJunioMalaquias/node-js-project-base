require('dotenv')
require('express-async-errors')
const cors = require('cors')
const http = require('http')
const express = require('express')
const addRequestId = require('express-request-id')()
const routes = require('./routes/v1/index')
const errorMiddleware = require('./middleware/error')
const createLocaleMiddleware = require('express-locale')
const { startPolyglot } = require('./locales/polyglot')

class Server {
  constructor() {
    this.app = express()
    this.server = http.Server(this.app)

    this.internationalization()
    this.middleware()
    routes.init(this.app)
    this.exceptionsHandler()
  }

  middleware() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(addRequestId)
  }

  routes() {
    routes.configureRoutes(this.app)
  }

  exceptionsHandler() {
    this.app.use(errorMiddleware)
  }

  internationalization() {
    this.app.use(
      createLocaleMiddleware({
        priority: ['accept-language', 'default'],
        default: 'pt_BR',
      })
    )
    this.app.use(startPolyglot)
  }
}

module.exports = new Server().server
