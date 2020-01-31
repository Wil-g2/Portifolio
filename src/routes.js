const routes = require('express').Router();
const api = require('./services/service');

routes.get('/', (req, res) => {
  return res.render('index');
}); 

routes.get('/skills', (req, res) => {
  return res.render('skills');
}); 

routes.get('/portifolio', async (req, res) => {  
  const repositories = await api.get('wil-g2/repos');
  res.render('portifolio',{data: repositories.data});
});

module.exports = routes;