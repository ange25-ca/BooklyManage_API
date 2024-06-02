/*const multer = require('multer');
const { agregarLibro } = require('../controllers/librosController');

// Configuración de multer para manejar el archivo de imagen
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliza el nombre original del archivo
  }
});

const upload = multer({ storage: storage });

function agregarLibroController(req, res) {
  try {
    // Verificar si req.file existe
    if (!req.file) {
      return res.status(400).send('No se ha subido ningún archivo.');
    }

    // Imprimir la información de req.file para verificar la carga del archivo
    console.log(req.file);

    const { titulo, autor, ISBN, genero, fecha_publi, descripcion } = req.body;
    const imagenPath = req.file.path;

    // Llamada a la función para agregar el libro
    agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath)
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        console.error('Error al agregar el libro:', error);
        res.status(500).send('Error al agregar el libro');
      });
  } catch (error) {
    console.error('Error en el controlador agregarLibroController:', error);
    res.status(500).send('Error en el servidor');
  }
}


module.exports = { 
    upload, 
    agregarLibroController 
};*/


