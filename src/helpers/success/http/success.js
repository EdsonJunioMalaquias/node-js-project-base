class Success {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  json(data) {
    return this.res.status(200).json(data)
  }

  jsonWithCache(data, seconds) {
    this.res.set('Cache-Control', `public, max-age=${seconds}`)
    return this.res.status(200).json(data)
  }

  jsoni18n(code) {
    this.data = {
      success: {
        code: code,
        message: this.req.polyglot.t(code),
      },
      requestId: this.req.id,
    }
    return this.res.status(200).json(this.data)
  }
}

module.exports = Success
