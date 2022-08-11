const express = require('express');

const chavesController = require('../controllers/chavesController');

const route = express.Router();

route.get('/', chavesController.getAll);

route.get('/:id', chavesController.getById);

route.post('/', chavesController.add);

route.put('/:id', chavesController.update);

module.exports = route;