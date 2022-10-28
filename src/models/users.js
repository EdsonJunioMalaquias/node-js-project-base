const serviceBase = require('../services')
const { BadRequestError } = require('../helpers/errors')

const _clearStringCPF = (cpf) => {
  if (cpf) {
    const onlyNumbersCpf = cpf.toString().replace(/\.|-/gm, '')

    if (onlyNumbersCpf.length === 11) {
      return onlyNumbersCpf
    }
  }

  throw new BadRequestError('invalid_cpf')
}

const _genericMethodValidateCpf = (fieldCpf) => {
  let cpf = fieldCpf

  if (cpf.length === 11) {
    cpf = cpf.split('').map((digit) => Number(digit))

    let v1 = 0
    let v2 = 0
    let aux = false

    for (let i = 1; cpf.length > i; i++) {
      if (cpf[i - 1] !== cpf[i]) {
        aux = true
      }
    }

    if (aux === false) {
      return false
    }

    for (let i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
      v1 += cpf[i] * p
    }

    v1 = (v1 * 10) % 11

    if (v1 === 10) {
      v1 = 0
    }

    if (v1 !== cpf[9]) {
      return false
    }

    for (let i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
      v2 += cpf[i] * p
    }

    v2 = (v2 * 10) % 11

    if (v2 === 10) {
      v2 = 0
    }

    if (v2 !== cpf[10]) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}
const _validateAndGetFormattedData = ({ name, cpf }) => {
  cpf = _clearStringCPF(cpf)

  if (!_genericMethodValidateCpf(cpf)) {
    throw new BadRequestError('invalid_cpf')
  }

  if (name.length > 10) {
    throw new BadRequestError(`name_greater_than_ten`)
  }

  return {
    cpf,
    name,
  }
}
const getAll = async () => {
  return await serviceBase.mock.users.getAll()
}

const getById = async ({ id }) => {
  return await serviceBase.mock.users.getById({ id })
}

const post = async ({ name, cpf }) => {
  const user = _validateAndGetFormattedData({ name, cpf })

  return await serviceBase.mock.users.post(user)
}

const put = async ({ id, name, cpf }) => {
  const user = _validateAndGetFormattedData({ name, cpf })

  return await serviceBase.mock.users.put({ id, ...user })
}

const remove = async ({ id }) => {
  return await serviceBase.mock.users.remove({ id })
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  remove,
}
