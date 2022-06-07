const express = require('express')
const UsersController = require('../controllers/UsersController')

const router = express.Router();

router.get('/', UsersController.showLoginPage)
router.post('/', UsersController.login)
router.get('/user', UsersController.showCreateUserPage)
router.post('/user', UsersController.create)

module.exports = router