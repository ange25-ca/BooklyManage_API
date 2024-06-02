const express = require('express');
const router = express.Router();
const librosService = require('../services/librosService');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


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

async function agregarLibro(req, res) {
    try {
        const { titulo, autor, ISBN, genero, fecha_publi, descripcion } = req.body;
        const imagen = req.file.path; // Suponiendo que la imagen está adjunta en el campo 'file'

        // Llamar al modelo para agregar el libro
        const nuevoLibro = await libroModel.agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen);

        // Enviar una respuesta al cliente
        res.status(201).json({ mensaje: 'Libro agregado correctamente', libro: nuevoLibro });
    } catch (error) {
        console.error('Error al agregar el libro:', error);
        res.status(500).json({ error: 'Error al agregar el libro' });
    }
}
module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarLibro
};

