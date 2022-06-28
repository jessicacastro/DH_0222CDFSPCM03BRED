const axios = require('axios')

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/',
});

module.exports = githubAPI;