import express from 'express';
import * as teamService from './teamService.js';

const router = express.Router();

router.get('/', (req, res) => {
    const asignaturas = teamService.getAsignaturas(0, 20);
    res.render('index', { asignaturas: asignaturas}); // Renderizar la plantilla 'index' con las asignaturas iniciales obtenidos
    
});

router.get('/nuevo', (req, res) => { // req lo que enviamos - res lo que express nos responde
    res.render('new_element');
});

router.post('/nuevoElemento', (req, res) => {
    let { nombre, imagen, descripcion, creditos, obligatorio } = req.body;
    let opiniones = [];
    let id = teamService.addAsignatura({nombre,descripcion, imagen, creditos, obligatorio, opiniones});
    res.render('guardado', {id})
});

router.get('/nuevoElemento/:id', (req, res) => {
    let asignatura = teamService.getAsignatura(req.params.id); // Obtener la asignatura con el ID proporcionado
    res.render('masInfo', {asignatura} ); // Renderizar la plantilla 'equipos' con el equipo obtenido
});

router.get('/masInfo/:id', (req, res) => { // req lo que enviamos - res lo que express nos responde
    let asignatura = teamService.getAsignatura(req.params.id); // Obtener la asignatura con el ID proporcionado
    res.render('masInfo', {asignatura} ); // Renderizar la plantilla 'equipos' con el equipo obtenido
});

router.post('/agregarOpinion/:id', (req, res) => {
    let id = req.params.id;
    let asignatura = teamService.getAsignatura(req.params.id);
    // Obtén los datos del formulario
    let nombre = req.body.nombre;
    let opinion = req.body.opinion;
    let imagen = req.body.imagen;

    // Agrega la nueva opinión al objeto de asignatura
    asignatura.opiniones.push({ nombre, opinion, imagen });

    // Redirige de nuevo a la página de detalles
    res.redirect(`/masInfo/${id}`);
});


router.get('/masInfo/modificar/:id', (req, res) => {

    let asignatura = teamService.getAsignatura(req.params.id);

    res.render('modificar', {asignatura})
});

router.post('/modificar/:id', (req, res) => {
   console.log(req.body.nombre);
   let { nombre, imagen, descripcion, creditos, obligatorio } = req.body;
   teamService.modificarAsignatura(req.params.id, nombre, imagen, descripcion, creditos, obligatorio)
   res.redirect('/')


});

export default router;
