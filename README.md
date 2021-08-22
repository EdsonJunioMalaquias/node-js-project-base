## Description

This project was created to help initialize other projects, it use layers to decoupling, version, errors treatment internationalized(i18n), validators (Joi) and good practices.

## Tree

```
src
  ├───controllers
  │   └───v1
  ├───helpers
  │   ├───errors
  │   │   └───http
  │   ├───log
  │   └───success
  │       └───http
  ├───locales
  │   └───languages
  │       └───user
  ├───middleware
  ├───models
  ├───routes
  │   └───v1
  ├───services
  │   ├───mock
  │   └───postgres
  └───validators
```

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environnement.

## Install project dependency

```
  $ npm install
```

## Running the project

```
  $ npm run start:dev
```

### .env Configurations

## To get the MOCK_CRUD_URL I use https://crudcrud.com/

MOCK_CRUD_URL=

### Next Steps

- Debugger Configurations
- Update Joi and express-validation
- Middleware authentication (JWT)
- Layer Test
