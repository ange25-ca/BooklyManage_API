const librosService = require('../services/librosService');

async function obtenerTodos(req, res) {
    try {
        const libros = await librosService.obtenerTodos();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
}

async function obtenerPorId(req, res) {
    const { id } = req.params;
    try {
        const libros = await librosService.obtenerPorId(id);
        if (libros) {
            res.json(libros);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}


module.exports = {
    obtenerTodos,
    obtenerPorId
};