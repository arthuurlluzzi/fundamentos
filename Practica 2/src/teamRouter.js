import express from 'express';
import * as teamService from './teamService.js';

const router = express.Router();



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
