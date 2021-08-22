const { Pool } = require('pg')
const types = require('pg').types
const typesDate = [1184, 1114, 1082]

// Not convert date
typesDate.forEach((code) => {
  types.setTypeParser(code, function (stringValue) {
    return stringValue
  })
})

const poolPostgres = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  max: Number(process.env.POSTGRES_MAX_CONNECTIONS || 10),
})

const query = async (sql, params = []) => {
  const result = await poolPostgres.query(sql, params)
  return result.rows
}

const queryFirstOrNull = async (sql, params = []) => {
  const result = await poolPostgres.query(sql, params)

  if (result.rowCount > 0) {
    return result.rows[0]
  }

  return null
}

const getClient = async () => {
  const client = await poolPostgres.connect()
  return client
}

module.exports = {
  query,
  queryFirstOrNull,
  getClient,
}
