const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const getInfoDatabase = require('./src/utils/getInfoDatabase')
const productsRouter = require('./src/routers/productsRouter')

const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views')) 
app.use(methodOverride('_method'))

app.use('/products', productsRouter)

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const users = getInfoDatabase('users')
  const { email, password } = req.body

  const userExists = users.find(user => {
    return user.email === email && user.password === password
  })

  if (!userExists) return res.redirect('/')

  return res.redirect('products')
})

app.listen(port, () => console.log(`O servidor está sendo executado na porta ${port}`))