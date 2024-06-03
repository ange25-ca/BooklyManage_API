const express = require('express');
const router = express.Router();
const librosService = require('../services/librosService');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const libroModel = require('../models/libroModel');


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
        
        // Asegurarse de que req.file existe y tiene un path
        if (!req.file) {
            return res.status(400).send('No se ha subido ninguna imagen.');
        }
        const imagenPath = req.file.path; // Obtener la ruta del archivo subido por Multer
        
        // Llamar a la función del modelo para agregar el libro a la base de datos
        const resultado = await libroModel.agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);

        // Envía una respuesta con el resultado
        res.status(201).send(resultado);
    } catch (error) {
        // Maneja los errores y envía una respuesta de error
        console.error('Error al agregar el libro:', error);
        res.status(500).send('Error al agregar el libro');
    }
}
module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarLibro
};

