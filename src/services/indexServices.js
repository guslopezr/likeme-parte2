const pool = require('../dataBase/conexion')

const mostrar = async() => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts ORDER BY id ASC;')
        return rows
    } catch (e) {
        console.log(e)
    }
}

const postear = async(titulo, img, descripcion) => {
    try {
        const command = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, DEFAULT );'
        const values = [titulo, img, descripcion]
        await pool.query(command, values)
    } catch (e) {
        console.log(e)
    }

}

const marcarLike = async id => {
    try {
        const command = 'UPDATE posts SET likes = likes + 1  WHERE id = $1;'
        const value = [id]
        await pool.query(command, value)

    } catch (e) {
        console.log(e)
    }
}

const borrar = async id => {
    try {
        const command = 'DELETE FROM posts WHERE id = $1;'
        const value = [id]
        await pool.query(command, value)

    } catch (e) {
        console.log(e)
    }

}

module.exports = { mostrar, postear, marcarLike, borrar }