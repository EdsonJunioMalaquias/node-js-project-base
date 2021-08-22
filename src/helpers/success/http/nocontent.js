class NoContent {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  send() {
    return this.res.status(204).send()
  }
}

module.exports = NoContent
