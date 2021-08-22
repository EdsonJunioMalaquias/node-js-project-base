const userPt = require('./user/pt')
const userEn = require('./user/en')

const ptBr = {
  badRequest: 'Favor verificar os parametros fornecidos.',
  internal_server_error_500: 'Erro interno do servidor.',
  forbidden_403: 'Você não possui permissão para realizar essa ação',

  ...userPt,
  ...userEn,
}

module.exports = ptBr
