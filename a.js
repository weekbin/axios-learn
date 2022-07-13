const axios = require('./dist/node/axios.cjs');

const request = axios.create({
  baseURL: 'https://api.github.com'
})

request.interceptors.request.use(config => config)
request.interceptors.response.use(res => res)

const a = request.get('/users/octocat')

console.log(a)
