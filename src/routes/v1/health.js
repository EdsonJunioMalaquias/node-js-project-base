const { Success } = require('../../helpers/success')

const init = (expressInstance, basePath) => {
  expressInstance.get(`${basePath}/health`, async (req, res) => {
    return new Success(req, res).json({ state: 'health' })
  })
}

module.exports = {
  init,
}
