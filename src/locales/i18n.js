const availableLangs = ['es', 'en', 'pt']

const ptLanguage = require('./languages/pt')
const enLanguage = require('./languages/en')

const messages = {
  en: { ...enLanguage },
  pt: { ...ptLanguage },
}

module.exports = { messages, availableLangs }
