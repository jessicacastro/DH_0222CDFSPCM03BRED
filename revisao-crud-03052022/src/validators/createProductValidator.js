const { body } = require("express-validator");

const createProductValidator = [
  body("name").not().isEmpty().withMessage("O nome é obrigatório"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("O preço é obrigatório")
    .isLength({ min: 1 })
    .withMessage("O preço minimo é 1"),
  body("discount").not().isEmpty().withMessage("O desconto é obrigatório"),
  body("category").not().isEmpty().withMessage("A categoria é obrigatória"),
];

module.exports = createProductValidator;
