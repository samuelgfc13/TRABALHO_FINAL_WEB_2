const express = require('express');
const routes = express.Router();

const cadastrosController = require('../controllers/cadastrosControllers');

routes.post('/cadastros', cadastrosController.insert);
routes.get('/cadastros', cadastrosController.index);
routes.get('/cadastros/:id', cadastrosController.details);
routes.put('/cadastros/:id', cadastrosController.update);
routes.delete('/cadastros/:id', cadastrosController.delete)

module.exports = routes;