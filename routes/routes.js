const express = require('express');
const route = express.Router();

const controller = require('../controller/controller.js');

route.get('/load', controller.apidata);

route.get('/emp', controller.get);

route.post('/emp', controller.create);

route.put('/emp/:id', controller.update);

route.delete('/emp/:id', controller.destroy);

route.get('/emp/:id', controller.getId);

module.exports = route;