const validator = require('../../validators/user')
const controller = require('../../controllers/v1/user.js')

const init = (expressInstance, basePath) => {
  expressInstance.get(`${basePath}/user`, controller.getAll)
  expressInstance.post(`${basePath}/user`, controller.post)
  expressInstance.get(`${basePath}/user/:id`, validator, controller.getById)
  expressInstance.put(`${basePath}/user/:id`, validator, controller.put)
  expressInstance.delete(`${basePath}/user/:id`, validator, controller.remove)
}

module.exports = {
  init,
}
