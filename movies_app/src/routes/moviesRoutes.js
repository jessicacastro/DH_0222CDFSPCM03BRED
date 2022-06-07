const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recommended);


module.exports = router;