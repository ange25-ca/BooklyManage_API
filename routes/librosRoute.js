const express = require('express');
const router = express.Router();
//const { verificarToken } = require('../middlewares/autenticador');
const librosController = require('../controllers/productosController');

// Rutas para los productos
router.get('/', librosController.obtenerTodos);
router.get('/:id', librosController.obtenerPorId);

module.exports = router;