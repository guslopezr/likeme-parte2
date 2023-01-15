const { mostrar, postear, marcarLike, borrar } = require('../services/indexServices')

const methodController = {
    show: async(req, res) => {
        try {
            const posts = await mostrar()
            res.status(200).json(posts)
        } catch (e) {
            console.log(e)
            res.status(500)
        }

    },

    create: async(req, res) => {
        try {
            const { titulo, url, descripcion } = req.body
            const posts = await postear(titulo, url, descripcion)
            res.status(201).json(posts)
        } catch (e) {
            console.log(e)
            res.status(500)
        }
    },

    modify: async(req, res) => {
        try {

            const { id } = req.params
            const posts = await marcarLike(id)
            res.status(200).json(posts)

        } catch (e) {
            console.log(e)
            res.status(500)
        }
    },

    erase: async(req, res) => {
        try {
            const { id } = req.params
            const posts = await borrar(id)
            res.status(200).json(posts)

        } catch (e) {
            console.log(e)
            res.status(500)
        }
    }
}

module.exports = methodController