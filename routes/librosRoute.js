const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/autenticador');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const librosController = require('../controllers/librosController');

// Rutas para los productos
router.get('/', librosController.obtenerTodos);
router.get('/:id', librosController.obtenerPorId);
router.post('/ruta', upload.single('imagen'), librosController.agregarLibro);

module.exports = router;