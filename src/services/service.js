const axios = require('axios').default;

module.exports = api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

