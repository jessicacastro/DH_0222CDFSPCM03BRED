const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/', ProductsController.index)
router.get('/detail/:id', ProductsController.details)
router.get('/edit/:id', ProductController.edit)
router.patch('/edit/:id', ProductController.update)

module.exports = router