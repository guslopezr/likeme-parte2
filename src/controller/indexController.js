const path = require('path')

const controller = {

    show: (req, res) => {
        res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'))
    },

    notFound: (req, res) => {
        res.status(404).sendFile(path.resolve(__dirname, '../../public/notFound.html'))
    }
}

module.exports = controller