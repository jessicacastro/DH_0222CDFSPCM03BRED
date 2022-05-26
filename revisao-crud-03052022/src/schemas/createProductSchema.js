const Joi = require('joi')

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.empty": `O nome precisa ser preenchido`,
    "string.min": `O nome precisa ter 3 ou mais caracteres`,
  }),
  price: Joi.number().min(1).required().messages({
    "number.empty": `O preço precisa ser preenchido`,
    "number.min": `O preço precisa ser maior do que zero`,
    "number.base": `O preço precisa ser um número`,
  }),
  discount: Joi.number().required().messages({
    "number.empty": `O desconto precisa ser preenchido`,
    "number.base": `O desconto precisa ser um número`,
  }),
  category: Joi.string().required().regex(/in-sale|visited/).messages({
    "string.empty": `Você precisa selecionar uma categoria`,
  }),
  description: Joi.string().max(10).required().messages({
    "string.empty": `A descrição precisa ser preenchida`,
    "string.max": `A descrição deve ter no máximo 10 caracteres`,
  }),
})


module.exports = createProductSchema
