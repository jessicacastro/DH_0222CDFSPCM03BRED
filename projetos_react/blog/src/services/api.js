import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
})

export default api