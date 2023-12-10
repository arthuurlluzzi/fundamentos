import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import teamRouter from './teamRouter.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Obtener el directorio actual (usando ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Utilizar archivos estáticos de la carpeta public
app.use(express.static(join(__dirname, '/../public')));

// Definir puerto
const port = process.env.PORT || 4000;


// Analizar solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Agregar router
app.use('/', teamRouter);

// Agregar Mustache
app.set('views', join(__dirname, '/../views'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());


// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

