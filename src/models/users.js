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

const _VerifyCPF = (cpf) => {
  const strCpfFormatted = _clearStringCPF(cpf)
  let sum = 0
  let rest

  if (strCpfFormatted === '00000000000') {
    throw new BadRequestError('invalid_cpf')
  }

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCpfFormatted.substring(i - 1, i)) * (11 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) {
    rest = 0
  }

  if (rest !== parseInt(strCpfFormatted.substring(9, 10))) {
    throw new BadRequestError('invalid_cpf')
  }

  sum = 0

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(strCpfFormatted.substring(i - 1, i)) * (12 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) {
    rest = 0
  }

  if (rest !== parseInt(strCpfFormatted.substring(10, 11))) {
    throw new BadRequestError('invalid_cpf')
  }

  return true
}

const getAll = async () => {
  return await serviceBase.mock.users.getAll()
}

const getById = async ({ id }) => {
  return await serviceBase.mock.users.getById({ id })
}

const post = async ({ name, cpf }) => {
  _VerifyCPF(cpf)
  return await serviceBase.mock.users.post({ name, cpf })
}

const put = async ({ id, name, cpf }) => {
  _VerifyCPF(cpf)
  return await serviceBase.mock.users.put({ id, name, cpf })
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
