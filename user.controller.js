const Users = require('./User');

const user = {
    get: async (req, res) => {
        res.status(200).send('Este es un chanchito')
    },
    list: async (req, res) =>{
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req, res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: async (req, res) => {
        res.status(204).send('Actualizando chanchito')
    },
    destroy: async (req, res) => {
        res.status(204).send('Eliminando un chanchito')
    }
}

module.exports = user;