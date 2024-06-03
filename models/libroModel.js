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
        await conexion.query('INSERT INTO libro (titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)', [titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen]);
        return { titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen }; // Devuelve los datos del libro agregado
    } catch (error) {
        console.error('Error al agregar el libro:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}


/*async function eliminarLibro(usuarioId, libroId){
    const conexion = await obtenerConexion();
    try {
        await conexion.query(
            `DELETE FROM libro WHERE id = ? AND usuario_id = ?`,
            [libroId, usuarioId]
        );
        console.log('Producto eliminado del carrito correctamente');
    } catch (error) {
        console.error('Error al eliminar el libro del catalogo:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}*///No elimina en la bd 

async function eliminarLibro(usuarioId, libroId) {
    const conexion = await obtenerConexion();
    try {
        console.log('Usuario ID:', usuarioId);
        console.log('Libro ID:', libroId);

        const [results] = await conexion.query(
            `DELETE FROM libro WHERE id = ? AND (usuario_id = ? OR usuario_id IS NULL)`,
            [libroId, usuarioId]
        );

        console.log('Resultado de la eliminación:', results);

        if (results.affectedRows > 0) {
            console.log('Libro eliminado correctamente');
        } else {
            console.log('No se encontró el libro para eliminar');
        }
    } catch (error) {
        console.error('Error al eliminar el libro:', error.message);
        throw error;
    } finally {
        conexion.end(); // Cierra la conexión
    }
}



module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarLibro,
    eliminarLibro
};