//ROUTER API
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const librosController = require('../controllers/librosController');

router.post('/ruta', upload.single('imagen'), librosController.agregarLibro);

// Importar rutas específicas
const librosRoute = require('./librosRoute');
const usuarioRoute = require('./usuarioRoute');
const agregarLibroRouter = require('./agregar-libro');

// Rutas específicas para libros
router.use('/libros', librosRoute);

// Rutas específicas para usuarios
router.use('/usuarios', usuarioRoute);

router.use('/agregar-libro', agregarLibroRouter);

module.exports = router;