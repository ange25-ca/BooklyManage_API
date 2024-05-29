const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioController');

// Rutas para usuarios
router.post('/registrar', usuariosController.registrarUsuario);
router.post('/login', usuariosController.loginUsuario);

module.exports = router;