const { obtenerConexion } = require('../database/conexion');

async function obtenerTodos() {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM libro');
        return results;
    } catch (error) {
        console.error('Error al obtener los libros:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM libro WHERE id = ?', [id]);
        if (results.length > 0) {
            return results[0];
        }
        return null;
    } catch (error) {
        console.error('Error al obtener el libros por ID:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId
};