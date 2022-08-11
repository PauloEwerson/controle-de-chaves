const express = require('express');

const chavesController = require('../controllers/chavesController');

const route = express.Router();

route.get('/', chavesController.getAll);

module.exports = route;