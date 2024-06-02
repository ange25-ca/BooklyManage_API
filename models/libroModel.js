//const { agregarLibro } = require('../controllers/librosController');
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

async function agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO libros (titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)', [titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen]);
        return { titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen }; // Devuelve los datos del libro agregado
    } catch (error) {
        console.error('Error al agregar el libro:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarLibro
};