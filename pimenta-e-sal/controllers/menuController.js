const menuList = [
  {
    id: 1, 
    name: 'Carpaccio fresco',
    description: 'Entrada Carpaccio de salmão com cítricos',
    price: 65.50,
  }, 
  {
    id: 2, 
    name: 'Risotto de berinjela',
    description: 'Risotto de berinjela e queijo de cabra',
    price: 47.00,
  }, 
  {
    id: 3, 
    name: 'Mousse de arroz',
    description: 'Mousse de arroz com leite e aroma de flor de laranjeira',
    price: 27.50
  },
  {
    id: 4, 
    name: 'Aspargos brancos',
    description: 'Aspargos brancos com vinagrete de legumes e presunto ibérico',
    price: 37.50
  },
  {
    id: 5,
    name: 'Lasanha de Presunto e Queijo',
    description: 'Lasanha de presunto e queijo com molho de tomate',
    price: 12.00
  }
]

const menuController = {
  getHomepage: (req, res) => {
    res.render('index', { menu: menuList });
  }, 
  getDetails: (req, res) => {
    const { id } = req.params;
    
    res.render('detalheMenu');
  }
}

module.exports = menuController;