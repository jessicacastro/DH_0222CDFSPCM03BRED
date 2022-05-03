const getInfoDatabase = require('../utils/getInfoDatabase')
const formatPrice = require('../utils/formatPrice')

const products = getInfoDatabase('products')

const ProductsController = {
  index: (req, res) => {
    res.render('products', {
      products,
      formatPrice
    })
  },

  details: (req, res) => {
    const { id } = req.params
    const productFound = products.find((product) => {
      return product.id === Number(id)
    })

    res.render('detail', {
      productFound,
      formatPrice
    })
  }
}

module.exports = ProductsController