const viaCepAPI = require('../requests/viacep');
const githubAPI = require('../requests/github');

const usuarioController = {
  getAddress: async (req, res) => {
    const { cep } = req.params;

    const data = await viaCepAPI.get(`${cep}/json`)
      .then(({ data }) => data)
      .catch(error => res.status(error.status).json({ mensagem: error.message }))

    const resposta = {
      logradouro: data.logradouro,
      bairro: data.bairro
    }

    res.status(200).json(resposta);
  },
  getByUsername: async (req, res) => {
    const { username } = req.params;

    const user = await githubAPI.get(`users/${username}`)
      .then(({ data }) => data)
      .catch(error => res.status(error.status).json({ mensagem: error.message }))

    const repos = await githubAPI.get(`users/${username}/repos`)
      .then(({ data }) => data)
      .catch(error => res.status(error.status).json({ mensagem: error.message }))

    const resposta = {
      username: user.login,
      name: user.name,
      avatar_url: user.avatar_url,
      repos: repos.map(repo => { return { name: repo.name, description: repo.description } })
    }

    res.status(200).json(resposta);
  }
}

module.exports = usuarioController;