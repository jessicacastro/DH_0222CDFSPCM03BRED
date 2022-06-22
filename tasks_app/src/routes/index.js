const express = require('express');
const router = express.Router();

const registerRoutes = require('./registerRoutes');
const loginRoutes = require('./loginRoutes');
const taskRoutes = require('./taskRoutes');

router.get('/test', (request, response) => 
  response.json({ mensagem: 'API Funcionando!'}))


router.use('/', registerRoutes);
router.use('/login', loginRoutes);
router.use('/tasks', taskRoutes);



module.exports = router;