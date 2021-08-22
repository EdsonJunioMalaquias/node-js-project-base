class Created {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  json(data) {
    return this.res.status(201).json(data)
  }
}

module.exports = Created
