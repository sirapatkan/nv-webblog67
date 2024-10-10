const { Keyboard } = require('../models');

module.exports = {
    // get all keyboards
    async index(req, res) {
        try {
            const keyboards = await Keyboard.findAll();
            res.send(keyboards);
        } catch (err) {
            res.status(500).send({
                error: 'The keyboards information was incorrect'
            });
        }
    },
    // create keyboard
    async create(req, res) {
        try {
            console.log('Keyboard create req.body:', req.body);
            const keyboard = await Keyboard.create(req.body);
            console.log('Keyboard create keyboard:', keyboard);
            res.send(keyboard.toJSON());
        } catch (err) {
            console.log('Keyboard create err:', err);
            res.status(500).send({
                error: 'Create keyboard incorrect'
            });
        }
    },
    // edit keyboard, suspend, active
    async put(req, res) {
        try {
            await Keyboard.update(req.body, {
                where: {
                    id: req.params.keyboardId
                }
            });
            res.send(req.body);
        } catch (err) {
            res.status(500).send({
                error: 'Update keyboard incorrect'
            });
        }
    },
    // delete keyboard
    async remove(req, res) {
        try {
            const keyboard = await Keyboard.findOne({
                where: {
                    id: req.params.keyboardId
                }
            });
            if (!keyboard) {
                return res.status(403).send({
                    error: 'The keyboard information was incorrect'
                });
            }
            await keyboard.destroy();
            res.send(keyboard);
        } catch (err) {
            res.status(500).send({
                error: 'The keyboard information was incorrect'
            });
        }
    },
    // get keyboard by id
    async show(req, res) {
        try {
            const keyboard = await Keyboard.findByPk(req.params.keyboardId);
            res.send(keyboard);
        } catch (err) {
            res.status(500).send({
                error: 'The keyboard information was incorrect'
            });
        }
    }
};
