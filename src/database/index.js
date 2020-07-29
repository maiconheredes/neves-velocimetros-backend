const Sequelize = require('Sequelize');
const dbConfig = require('../config/database');
const Cachier = require('../models/Cashier');
const Payment = require('../models/Payment');

const connection = new Sequelize(dbConfig);

Cachier.init(connection);
Payment.init(connection);

module.exports = connection;
