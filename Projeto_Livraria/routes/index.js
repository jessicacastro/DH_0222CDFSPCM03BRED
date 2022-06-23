const express = require("express");
const router = express.Router();
const livrariaController = require('../controllers/livrariaController');

router.get("/test", (req, res) => res.json({ mensagem: 'API funcionando!' }));

router.get('/livros', livrariaController.listAll);
router.get('/livros/:id', livrariaController.getById);
router.get('/filterByPageQuantity', livrariaController.listAllByPages);
router.post('/livros', livrariaController.create);
router.put('/livros/:id', livrariaController.update);
router.delete('/livros/:id', livrariaController.delete);

module.exports = router;