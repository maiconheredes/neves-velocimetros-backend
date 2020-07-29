const Cashier = require('../models/Cashier');
const { update } = require('../models/Cashier');

module.exports = {
    async index(req, res) {
        const cashiers = await Cashier.findAll();

        return res.json(cashiers);
    },

    async store(req, res) {
        const { title, description } = req.body;

        const cashier = await Cashier.create({
            title, description,
        });

        return res.json(cashier);
    },

    async update(req, res) {
        const { id, title, description } = req.body;

        const cashier = await Cashier.findByPk(id);

        if (!cashier) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Caixa não encontrado.',
                        },
                    }
                ],
            });
        }

        cashier.title = title;
        cashier.description = description;

        cashier.save();

        return res.json(cashier);
    },

    async find(req, res) {
        const { id } = req.params;

        const cashier = await Cashier.findByPk(id);

        if (!cashier) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Caixa não encontrado.',
                        },
                    }
                ],
            });
        }

        return res.json(cashier);
    },

    async delete(req, res) {
        const { id } = req.params;

        const cashier = await Cashier.findByPk(id);

        if (!cashier) {
            return res.json({
                errors: [
                    {
                        error: {
                            message: 'Caixa não encontrado para deleção.',
                        },
                    }
                ],
            });
        }

        cashier.destroy();

        return res.json({});
    },
};
