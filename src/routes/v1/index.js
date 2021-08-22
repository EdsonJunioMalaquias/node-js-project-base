const basePath = `/v1/base-project`

// routes
const healthRoute = require('./health')
const usersRoute = require('./users')

const init = (express) => {
  healthRoute.init(express, basePath)
  usersRoute.init(express, basePath)
}

module.exports = {
  init,
}
