const modelsBase = require('../../models/index')
const { Success, NoContent, Created } = require('../../helpers/success')

const getAll = async (req, res) => {
  const users = await modelsBase.users.getAll()

  return new Success(req, res).json(users)
}

const getById = async (req, res) => {
  const id = req.params.id

  const user = await modelsBase.users.getById({ id })

  return new Success(req, res).json(user)
}

const post = async (req, res) => {
  const userCreated = await modelsBase.users.post({ ...req.body })

  return new Created(req, res).json(userCreated)
}

const put = async (req, res) => {
  const id = req.params.id

  await modelsBase.users.put({ id, ...req.body })

  return new NoContent(req, res).send()
}

const remove = async (req, res) => {
  const id = req.params.id

  await modelsBase.users.remove({ id })

  return new NoContent(req, res).send()
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  remove,
}
