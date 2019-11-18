const joi = require('@hapi/joi')

const exampleIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)

const createExampleSchema = {
  name: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  isAdmin: joi.boolean()
}

module.exports = {
  exampleIdSchema,
  createExampleSchema
}