const Server = require('./server')

Server.listen(process.env.PORT || 3000, () => {
  console.log(
    `server ${process.env.NODE_ENV} on port ${process.env.PORT || 3000}`
  )
})
