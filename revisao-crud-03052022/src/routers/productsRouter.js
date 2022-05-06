const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/', ProductsController.index)
router.get('/detail/:id', ProductsController.details)
router.delete('/delete/:id', ProductsController.delete)
router.get('/edit/:id', ProductsController.edit)
router.put('/edit/:id', ProductsController.update)

// FAZER
router.get('/create', ProductsController.create)
router.post('/', ProductsController.save)

module.exports = router