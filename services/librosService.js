const libroModel = require('../models/libroModel');
const multer = require('multer');

async function obtenerTodos() {
    return await libroModel.obtenerTodos();
}

async function obtenerPorId(id) {
    return await libroModel.obtenerPorId(id);
}

async function agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath) {
    try {
      // Llama al modelo para agregar el libro
      const respuesta = await libroModel.agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);
      return respuesta; // Devuelve la respuesta del modelo
    } catch (error) {
      console.error('Error al agregar el libro en el servicio:', error);
      throw error;
  }
}

async function eliminarLibro(usuarioId, LibroId){
  await libroModel.eliminarLibro(usuarioId, LibroId);
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarLibro,
    eliminarLibro
};