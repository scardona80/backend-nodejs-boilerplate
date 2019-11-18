const joi = require('@hapi/joi')

const exampleIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const exampleTitleSchema = joi.string().max(80)
const exampleYearSchema = joi.number().min(1888).max(2077)
const exampleCoverSchema = joi.string().uri()
const exampleDescriptionSchema = joi.string().max(500)
const exampleDurationSchema = joi.number().min(1).max(300)
const exampleContentRatingSchema = joi.string().max(5)
const exampleSourceSchema = joi.string().uri()
const exampleTagsSchema = joi.array().items(joi.string().max(50))

const createExampleSchema = {
  title: exampleTitleSchema.required(),
  year: exampleYearSchema.required(),
  cover: exampleCoverSchema.required(),
  description: exampleDescriptionSchema.required(),
  duration: exampleDurationSchema.required(),
  contentRating: exampleContentRatingSchema.required(),
  source: exampleSourceSchema.required(),
  tags: exampleTagsSchema
}

const updateExampleSchema = {
  title: exampleTitleSchema,
  year: exampleYearSchema,
  cover: exampleCoverSchema,
  description: exampleDescriptionSchema,
  duration: exampleDurationSchema,
  contentRating: exampleContentRatingSchema,
  source: exampleSourceSchema,
  tags: exampleTagsSchema
}

module.exports = {
  exampleIdSchema,
  createExampleSchema,
  updateExampleSchema
}