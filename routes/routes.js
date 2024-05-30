const express = require('express');
const router = express.Router();

// Importar rutas específicas
const librosRoute = require('./librosRoute');
const usuarioRoute = require('./usuarioRoute');

// Rutas específicas para productos
router.use('/libros', librosRoute);

// Rutas específicas para usuarios
router.use('/usuarios', usuarioRoute);

module.exports = router;