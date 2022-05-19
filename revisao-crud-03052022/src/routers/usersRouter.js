const express = require('express')
const UsersController = require('../controllers/UsersController')

const router = express.Router();

router.get('/', UsersController.showCreateUserPage)
router.post('/', UsersController.login)

module.exports = router