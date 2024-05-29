const express = require('express');
const router = express.Router();

// Importar rutas específicas
const librosRoute = require('./librosRoute');
const usuariosRoute = require('./usuariosRoute');

// Rutas específicas para productos
router.use('/libros', librosRoute);

// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);

module.exports = router;