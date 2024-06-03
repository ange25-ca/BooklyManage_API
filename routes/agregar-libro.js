const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const librosController = require('../controllers/librosController');

// Rutas para los 
router.post('/', upload.single('imagen'), librosController.agregarLibro);

module.exports = router;