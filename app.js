/*const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Configura DotEnv
dotenv.config();

// Verificar que la carpeta 'uploads/' existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configura multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Middleware para parsear JSON y URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Aplica multer middleware a la ruta específica
const agregarLibroRouter = require('./routes/agregar-libro');
app.post('/agregar-libro', upload.single('imagen'), agregarLibroRouter);

// Rutas generales
app.use('/', routes);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});*/

const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Configura DotEnv
dotenv.config();

// Middleware para parsear JSON y URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
  }
});
const upload = multer({ storage: storage });

// Verificar que la carpeta 'uploads/' existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Rutas generales
app.use('/', routes);

// Aplica multer middleware a la ruta específica
//const agregarLibroRouter = require('./routes/agregar-libro');
//app.use('/agregar-libro', upload.single('imagen'), agregarLibroRouter);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
