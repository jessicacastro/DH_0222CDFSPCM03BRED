const fs = require('fs')
const path = require('path')
const getInfoDatabase = require('../utils/getInfoDatabase')
const formatPrice = require('../utils/formatPrice')

const products = getInfoDatabase('products')
const pathProductsJSON = path.join(__dirname, '..', 'database', 'products.json')

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
  },

  delete: (req, res) => {
    const { id } = req.params
    
    const productsFiltered = products.filter(product => product.id !== Number(id))
    const productsFilteredJSON = JSON.stringify(productsFiltered, null, ' ')

    fs.writeFileSync(pathProductsJSON, productsFilteredJSON)

    res.redirect('/products')
  },

  edit: (req, res) => {
    const { id } = req.params

    const productToEdit = products.find(product => product.id === Number(id))

    res.render('product-edit-form', { productToEdit })
  },

  update: (req, res) => {
    const { id } = req.params
    const { name, description, price, discount, category } = req.body
    const productToEdit = products.find(product => product.id === Number(id))

    const productEdited = {
      id: productToEdit.id,
      name: name,
      description: description,
      price: price,
      discount: discount,
      category: category,
      image: productToEdit.image
    }

    const newProducts = products.map((product) => {
      if(product.id === productEdited.id) {
        return { ...productEdited }
      } 

      return product
    })

    const productsFilteredJSON = JSON.stringify(newProducts, null, ' ')

    fs.writeFileSync(pathProductsJSON, productsFilteredJSON)
    res.redirect('/products')
  },

  create: (req, res) => {
		res.render('product-create-form')
	},

  save: (req, res) => {
    const { name, price, discount, category, description } = req.body
    const newId = products.length + 1

    const newProduct = {
      id: newId,
      name,
      description,
      price,
      discount,
      image: 'default-image.png',
      category
    }    

    products.push(newProduct)

    const productsJSON = JSON.stringify(products, null, ' ')
    
    fs.writeFileSync(pathProductsJSON, productsJSON)
    res.redirect('/products')
	},
}

module.exports = ProductsController