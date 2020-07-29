const { Model, DateTypes, DataTypes } = require('sequelize');
const consts = require('../utils/consts');

class Payment extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            value: DataTypes.FLOAT,
            operation: DataTypes.ENUM([consts.EXPENSE, consts.REVENUE]),
            deleted: DataTypes.BOOLEAN,
        }, { sequelize });
    };
};

module.exports = Payment;
