const axios = require('axios')

const viaCepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

module.exports = viaCepAPI;