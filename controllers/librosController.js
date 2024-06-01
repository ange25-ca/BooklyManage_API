
const librosService = require('../services/librosService');

async function obtenerTodos(req, res) {
    try {
        const libros = await librosService.obtenerTodos();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
}

async function obtenerPorId(req, res) {
    const { id } = req.params;
    try {
        const libro = await librosService.obtenerPorId(id);
        if (libro) {
            res.json(libro);
        } else {
            res.status(404).json({ error: 'Libro no encontrado :(' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
}


module.exports = {
    obtenerTodos,
    obtenerPorId
};