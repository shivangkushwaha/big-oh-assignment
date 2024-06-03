const Joi = require('joi');

const createFormSchema = Joi.object({
  title: Joi.string().required()
});

const fillDataSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().integer().required(),
  isGraduate: Joi.boolean().required()
});

module.exports = {
  createFormSchema,
  fillDataSchema
};
