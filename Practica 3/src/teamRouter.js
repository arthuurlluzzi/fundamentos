  import express from "express";
  import * as teamService from "./teamService.js";

  const router = express.Router();

  // Views render

  router.get("/nuevo", (req, res) => {
    // req lo que enviamos - res lo que express nos responde
    let titulo = "Nuevo Elemento";
    console.log(titulo);
    const action = "/nuevoElemento";
    res.render("element", { titulo, action });
  });

  router.post("/nuevoElemento", (req, res) => {
    let { nombre, imagen, descripcion, creditos, obligatorio } = req.body;
    let opiniones = [];
    let id = teamService.addAsignatura({
      nombre,
      descripcion,
      imagen,
      creditos,
      obligatorio,
      opiniones,
    });
    res.render("guardado", { id });
  });

  router.get("/nuevoElemento/:id", (req, res) => {
    let asignatura = teamService.getAsignatura(req.params.id); // Obtener la asignatura con el ID proporcionado
    console.log(asignatura);
    res.render("masInfo", { asignatura }); // Renderizar la plantilla 'equipos' con el equipo obtenido
  });

  router.get("/masInfo/:id/borrar", (req, res) => {
    teamService.borrarAsignatura(req.params.id); // Borrar el equipo con el ID proporcionado
    res.redirect("/"); // Renderizar la plantilla 'borrado.mustache'
  });

  router.get("/masInfo/:id", (req, res) => {
    // req lo que enviamos - res lo que express nos responde
    let asignatura = teamService.getAsignatura(req.params.id); // Obtener la asignatura con el ID proporcionado
    res.render("masInfo", { asignatura }); // Renderizar la plantilla 'equipos' con el equipo obtenido
  });

  router.post("/agregarOpinion/:id", (req, res) => {
    const id = req.params.id;
    const asignatura = teamService.getAsignatura(req.params.id);
    const { nombre, opinion, imagen } = req.body;

    const fields = [
      { id: "nombre", error: "Error: Nombre vacío" },
      { id: "opinion", error: "Error: Opinión vacía" },
      { id: "imagen", error: "Error: Imagen vacía" },
    ];

    const validationErrors = validateFields(fields, req.body);

    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores de validación, renderiza la misma página con los errores como parámetros
      console.log(validationErrors);
      return res.render("masInfo", {
        asignatura,
        errors: validationErrors,
        imagenCliente: imagen,
        nombreCliente: nombre,
        opinionCliente: opinion,
      });
    }

    // Agrega la nueva opinión al objeto de asignatura
    asignatura.opiniones.push({ nombre, opinion, imagen });

    // Redirige de nuevo a la página de detalles
    res.redirect(`/masInfo/${id}`);
  });

  router.get("/masInfo/modificar/:id", (req, res) => {
    let asignatura = teamService.getAsignatura(req.params.id);
    const titulo = "Modificar";
    const action = `/modificar/${req.params.id}`;
    res.render("element", { asignatura, titulo, action });
  });

  const validateFields = (fields, data) => {
    const errorMessages = {};

    for (const field of fields) {
      if (!data[field.id] || data[field.id].trim() === "") {
        errorMessages[field.id] = field.error;
      }
    }

    // Validación adicional para la URL de la imagen
    try {
      new URL(data.imagen);
    } catch (_) {
      errorMessages.imagen = "Error: Enlace corrupto";
    }

    return errorMessages;
  };

  router.post("/modificar/:id", (req, res) => {
    const fields = [
      { id: "nombre", error: "Error: Título vacío" },
      { id: "imagen", error: "Error: Imagen vacía" },
      { id: "descripcion", error: "Error: Descripción vacía" },
      { id: "creditos", error: "Error: Número de créditos vacíos" },
    ];

    const validationErrors = validateFields(fields, req.body);

    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores de validación, renderiza la misma página con los errores como parámetros
      console.log(validationErrors);
      return res.render("element", {
        asignatura: req.body,
        titulo: "Modificar",
        errors: validationErrors,
      });
    }

    const { nombre, imagen, descripcion, creditos, obligatorio } = req.body;
    teamService.modificarAsignatura(
      req.params.id,
      nombre,
      imagen,
      descripcion,
      creditos,
      obligatorio
    );

    res.redirect("/");
  });

  router.get("/", (req, res) => {
    const asignaturas = teamService.getAsignaturas(0, 3);

    res.render("index", {
      asignaturas: asignaturas,
    });
  });

  router.get("/asignatura", (req, res) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const asignaturas = teamService.getAsignaturas(from, to);

    console.log("ASIGANTURAS:", asignaturas); 
    res.render("asignatura", {
      asignaturas: asignaturas,
    });
  });


 
router.get("/datos", (req, res) => {
  const nombre = req.query.nombre;
  const descripcion = req.query.descripcion;
  const creditos = req.query.creditos;
  const asignaturas = teamService.getMap(); // Obtener el mapa de asignaturas

  
   
  asignaturas.forEach((asignatura, id) => {
    const titulo = asignatura.nombre;
  
    // Comparar el título con un valor específico
    if (titulo === 'nombre') {
      res.json({success: false, message: 'El titulo ya se ha repetido' })    }
    })   ;
  if (creditos === "" || nombre === "" || descripcion === "" ) {
    res.json({success: false, message: 'Faltan campos por rellenar' })
   } 
   res.json({success: true, message: '' });
  })

    
  router.get("/buscar", (req, res) => {
    const searchTerm = req.query.term;
    const asignaturasMap = teamService.getMap();
    const resultados = []; 

    for (let [key, value] of asignaturasMap.entries()) {
      if (value.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        resultados.push(value);
      }
    }

    console.log("Resultados:", resultados); 

    res.render("elemento_buscar", {
      asignaturas: resultados,
    });
  }); 


  export default router;
