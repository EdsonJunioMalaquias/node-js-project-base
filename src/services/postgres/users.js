const postgres = require('./_access')

const getAll = async () => {
  return await postgres.query(` select * from users `)
}

const getById = async ({ id }) => {
  return await postgres.queryFirstOrNull(
    ` select * from users where id = $1 `,
    [id]
  )
}

const post = async ({ name, cpf }) => {
  const params = [name, cpf]

  return await postgres.query(
    ` insert into users (name, cpf) values ($1, $2) `,
    params
  )
}

const put = async ({ name, cpf, id }) => {
  const params = [name, cpf, id]

  return await postgres.query(
    ` update users set name = $1, cpf = $2 where id = $3 `,
    params
  )
}

const remove = async ({ id }) => {
  const params = [id]

  return await postgres.query(` delete from users where id = $3 `, params)
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  remove,
}
