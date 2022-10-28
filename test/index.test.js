const assert = require('assert')
const models = require('../src/models/users')

// should throw an error when call _validateAndGetFormattedData
{
  const userInvalid = {
    _id: '635b1f3075250203e82f2ba1',
    name: `teste`,
    cpf: 11111111111,
  }
  assert.rejects(
    () => models.post(userInvalid),
    { message: `invalid_cpf` },
    `it should throw an error with invalid cpf`
  )

  assert.rejects(
    () => models.put(userInvalid),
    { message: `invalid_cpf` },
    `it should throw an error with invalid cpf`
  )
}

// should throw an error when call _validateAndGetFormattedData
{
  const userInvalid = { name: `teste teste teste`, cpf: `015.486.750-08` }
  assert.rejects(
    () => models.post(userInvalid),
    { message: `name_greater_than_ten` },
    `it should throw an error with name_greater_than_ten`
  )
  assert.rejects(
    () => models.put(userInvalid),
    { message: `name_greater_than_ten` },
    `it should throw an error with name_greater_than_ten`
  )
}

// should be create user
{
  const expectedUser = {
    _id: '635b1f3075250203e82f2ba1',
    cpf: '01548675008',
    name: 'teste',
  }
  const userValid = { name: `teste`, cpf: `015.486.750-08` }

  models.post(userValid).then((dataReturned) => {
    assert.deepEqual(
      expectedUser.cpf,
      dataReturned.cpf,
      'cpf should be the same'
    )
    assert.deepEqual(
      expectedUser.name,
      dataReturned.name,
      'name should be the same'
    )
  })
}

// should be edit name
{
  const userMock = {
    id: '635b1f3075250203e82f2ba1',
    cpf: '01548675008',
    name: 'teste',
  }

  const expectedUser = {
    _id: '635b1f3075250203e82f2ba1',
    cpf: '01548675008',
    name: 'NEW_NAME',
  }

  models.put({ ...userMock, name: expectedUser.name }).then(() => {
    models.getById(userMock).then((dataReturned) => {
      assert.deepEqual(
        expectedUser.name,
        dataReturned.name,
        'name should be the same'
      )
    })
  })
}

// should be edit name
{
  const userMock = {
    id: '635b1f3075250203e82f2ba1',
    cpf: '01548675008',
    name: 'teste',
  }

  const expectedUser = {
    _id: '635b1f3075250203e82f2ba1',
    cpf: '01548675008',
    name: 'NEW_NAME',
  }

  models.put({ ...userMock, name: expectedUser.name }).then(() => {
    models.getById(userMock).then((dataReturned) => {
      assert.deepEqual(
        expectedUser.name,
        dataReturned.name,
        'name should be the same'
      )
    })
  })
}
