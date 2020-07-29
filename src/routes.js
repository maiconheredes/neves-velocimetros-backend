const express = require('express');
const CashierController = require('./controllers/CashierController');
const PaymentController = require('./controllers/PaymentController');

const routes = express.Router();

routes.post('/cashiers', CashierController.store);
routes.get('/cashiers', CashierController.index);
routes.put('/cashiers', CashierController.update);
routes.get('/cashiers/:id', CashierController.find);
routes.delete('/cashiers/:id', CashierController.delete);

routes.post('/payments', PaymentController.store);
routes.get('/payments', PaymentController.index);
routes.put('/payments', PaymentController.update);
routes.get('/payments/:id', PaymentController.find);
routes.delete('/payments/:id', PaymentController.delete);

module.exports = routes;
