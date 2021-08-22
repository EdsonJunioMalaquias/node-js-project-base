const axios = require('axios')
const log = require('../../helpers/log')

const customAxios = () => {
  const instance = axios.create({
    baseURL: process.env.MOCK_CRUD_URL,
  })

  instance.interceptors.request.use((request) => requestHandler(request))

  instance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
  )

  return instance
}

const requestHandler = (request) => {
  request.requestStartTime = Date.now()

  return request
}

const errorHandler = (error) => {
  if (error.config && error.response) {
    const requestTime = Date.now() - error.config.requestStartTime

    log.warn(error.config.url, {
      status: error.response.status,
      baseURL: error.config.baseURL,
      requestTime,
      data: error.response.data,
    })
  }

  return Promise.reject(error)
}

const successHandler = (response) => {
  const requestTime = Date.now() - response.config.requestStartTime

  log.info(response.config.url, {
    status: response.status,
    requestTime,
  })

  return response
}

module.exports = customAxios
