const customAxios = require('./_access')

const getAll = async () => {
  const { data } = await customAxios().get(`/user`)

  return data
}

const getById = async ({ id }) => {
  const { data } = await customAxios().get(`/user/${id}`)

  return data
}

const post = async ({ name, cpf }) => {
  const { data } = await customAxios().post(`/user`, { name, cpf })

  return data
}

const put = async ({ name, cpf, id }) => {
  const { data } = await customAxios().put(`/user/${id}`, { name, cpf })

  return data
}

const remove = async ({ id }) => {
  const { data } = await customAxios().delete(`/user/${id}`)

  return data
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  remove,
}
