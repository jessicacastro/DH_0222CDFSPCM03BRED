const express = require('express');
const app = express();
const { v4: generateId } = require('uuid')

const porta = 3000;
const usuarios = [
  {
    id: generateId(),
    nome: 'Jessica',
    idade: 26
  }, 
  {
    id: generateId(),
    nome: 'Cassio',
    idade: 30
  }
]
app.get('/', (request, response) => response.json({ message: 'API está funcionando!'}))
app.get('/usuarios', (request, response) => response.json(usuarios))

app.listen(porta, () => console.log(`Servidor está rodando no endereço http://localhost:${porta}`))