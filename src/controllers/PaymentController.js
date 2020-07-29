const Payment = require('../models/Payment');

module.exports = {
    async store(req, res) {
        const {
            title, description, value,
            operation, deleted
        } = req.body;

        const payment = await Payment.create({
            title, description, value,
            operation, deleted
        });

        return res.json(payment);
    },

    async index(req, res) {
        const payments = await Payment.findAll({
            where: {
                deleted: false,
            },
        });

        return res.json(payments);
    },

    async find(req, res) {
        const { id } = req.params;

        const payment = await Payment.findByPk(id, {
            where: {
                deleted: false,
            },
        });

        if (!payment) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Pagamento não encontrado.',
                        },
                    },
                ],
            });
        }

        return res.json(payment);
    },

    async update(req, res) {
        const {
            id, title, description,
            value, operation, deleted
        } = req.body;

        const payment = await Payment.findByPk(id, {
            where: {
                deleted: false,
            },
        });

        if (!payment) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Pagamento não encontrado.',
                        },
                    },
                ],
            });
        }

        payment.title = title;
        payment.description = description;
        payment.value = value;
        payment.operation = operation;
        payment.deleted = deleted;

        payment.save();

        return res.json(payment);
    },

    async delete(req, res) {
        const { id } = req.params;

        const payment = await Payment.findByPk(id);

        if (!payment) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Pagamento não encontrado.',
                        },
                    },
                ],
            });
        }

        payment.destroy();

        return res.json({});
    },
};
