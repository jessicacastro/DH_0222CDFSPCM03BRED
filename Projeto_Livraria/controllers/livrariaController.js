const { Op } = require('sequelize');
const { Livro } = require('../models');

const livrariaController = {
  listAll: (req, res) => {
    Livro.findAll()
      .then(livros => res.status(200).json(livros))
      .catch(err => res.status(500).json(err));
  },
  listAllByPages: (req, res) => {
    Livro.findAll({
      limit: 10,
      order: [
        ['quantidade_paginas', 'DESC']
      ],
      where: {
        quantidade_paginas: {
          [Op.gte]: 467
        }
      }
    })
      .then(livros => res.status(200).json(livros))
      .catch(err => res.status(500).json(err));
  },
  getById: (req, res) => {
    Livro.findByPk(req.params.id)
      .then(livro => res.status(200).json(livro))
      .catch(err => res.status(500).json(err));
  },
  create: (req, res) => {
    Livro.create(req.body)
      .then(livro => res.status(201).json(livro))
      .catch(err => res.status(500).json(err));
  },
  update: (req, res) => {
    Livro.update(req.body, {
      where: { id: req.params.id }
    })
      .then(async livro => {
        const livroJSON = await Livro.findByPk(req.params.id)
          .then(livro => livro)

        return res.status(200).json(livroJSON);
      })
      .catch(err => res.status(500).json(err));
  },
  delete: (req, res) => {
    Livro.destroy({
      where: { id: req.params.id }
    })
      .then(() => res.status(200).json({ mensagem: 'Livro deletado com sucesso!' }))
      .catch(err => res.status(500).json(err));
  }
};

module.exports = livrariaController;