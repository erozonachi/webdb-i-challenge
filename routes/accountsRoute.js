const express = require('express');
const validator = require('../helpers/validator');
const controller = require('../controllers/accountsController');

const app = express.Router();

app.post('/', validator.validateAccount, controller.create);
app.get('/', controller.read);
app.get('/:id', validator.validateId, controller.read);
app.put('/:id', validator.validateId, validator.validateAccount, controller.update);
app.delete('/:id', validator.validateId, controller.delete);

module.exports = app;
