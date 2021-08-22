const validate = require('express-validation')
const Joi = require('joi')

module.exports = validate({
  params: {
    id: Joi.number()
      .required()
      .error((error) => {
        if (error.find((err) => err.type === 'number.base')) {
          return { message: 'user_id_is_string' }
        }

        return { message: 'user_id_is_required' }
      }),
  },
})
