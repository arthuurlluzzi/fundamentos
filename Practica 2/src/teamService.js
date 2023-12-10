const asignaturas = new Map();
export let nextId = 0;

export function loadSampleData() {
  // Hay 28 ejemplos

  addAsignatura({
    nombre: "Programacion orientada a objetos",
    descripcion: "Aprende todo sobre las clases",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxx1dITGY3cRnT8J5QPloSqpR9wBCbDlq2Q&usqp=CAU",
    obligatorio: true,
    creditos: 6,
    opiniones: [
      {
        nombre: "Estudiante1",
        opinion: "Excelente curso, lo recomiendo",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxx1dITGY3cRnT8J5QPloSqpR9wBCbDlq2Q&usqp=CAU",
      },
      {
        nombre: "Estudiante2",
        opinion: "Muy útil para comprender la programación orientada a objetos",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxx1dITGY3cRnT8J5QPloSqpR9wBCbDlq2Q&usqp=CAU",
      },
    ],
  });

  addAsignatura({
    nombre: "Introduccion a la programacion",
    descripcion: "Aprende la lógica de programación",
    imagen:
      "https://m.media-amazon.com/images/I/71NzTPzD1yL._AC_UF1000,1000_QL80_.jpg",
    obligatorio: false,
    creditos: 4,
    opiniones: [
      {
        nombre: "Estudiante3",
        opinion: "Buen curso para principiantes",
        imagen:
          "https://m.media-amazon.com/images/I/71NzTPzD1yL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nombre: "Estudiante4",
        opinion: "Lo recomiendo a quienes quieran comenzar en la programación",
        imagen:
          "https://m.media-amazon.com/images/I/71NzTPzD1yL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Fundamentos de la web",
    descripcion: "Aprende a ser desarrollador web",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBaruByAEQkiu9ziD9dXKQkSAMQRoxWyU-Q&usqp=CAU",
    obligatorio: true,
    creditos: 5,
    opiniones: [
      {
        nombre: "Estudiante5",
        opinion: "Muy completo, excelente para entender el desarrollo web",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBaruByAEQkiu9ziD9dXKQkSAMQRoxWyU-Q&usqp=CAU",
      },
      {
        nombre: "Estudiante6",
        opinion: "Las prácticas fueron muy útiles",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBaruByAEQkiu9ziD9dXKQkSAMQRoxWyU-Q&usqp=CAU",
      },
    ],
  });

  addAsignatura({
    nombre: "Introduccion a la informática",
    descripcion: "Aprende como funcionan los ordenadores",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Dpkzv4XZ4rz01tXt5FZRhcD0Lk44BOUNOIPkxyQJbJ78RoR_e4qE7v6iXKOZFMfgFuU&usqp=CAU",
    obligatorio: false,
    creditos: 3,
    opiniones: [
      {
        nombre: "Estudiante7",
        opinion:
          "Interesante pero algunos conceptos fueron difíciles de entender",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Dpkzv4XZ4rz01tXt5FZRhcD0Lk44BOUNOIPkxyQJbJ78RoR_e4qE7v6iXKOZFMfgFuU&usqp=CAU",
      },
      {
        nombre: "Estudiante8",
        opinion: "Buena introducción al mundo de la informática",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Dpkzv4XZ4rz01tXt5FZRhcD0Lk44BOUNOIPkxyQJbJ78RoR_e4qE7v6iXKOZFMfgFuU&usqp=CAU",
      },
    ],
  });

  addAsignatura({
    nombre: "Calculo",
    descripcion: "Refuerza las bases de tus matemáticas",
    imagen:
      "https://www.elsotano.com/imagenes_grandes/9786075/978607550268.JPG",
    obligatorio: true,
    creditos: 4,
    opiniones: [
      {
        nombre: "Estudiante9",
        opinion: "Curso desafiante pero valió la pena",
        imagen:
          "https://www.elsotano.com/imagenes_grandes/9786075/978607550268.JPG",
      },
      {
        nombre: "Estudiante10",
        opinion: "Las aplicaciones prácticas fueron muy útiles",
        imagen:
          "https://www.elsotano.com/imagenes_grandes/9786075/978607550268.JPG",
      },
    ],
  });

  addAsignatura({
    nombre: "Estructuras de datos",
    descripcion: "Todo sobre las estructuras de la programación",
    imagen:
      "https://www.marcombo.com/wp-content/uploads/2017/10/9788426722966.jpg",
    obligatorio: true,
    creditos: 5,
    opiniones: [
      {
        nombre: "Estudiante11",
        opinion:
          "Muy práctico, esencial para entender la programación avanzada",
        imagen:
          "https://www.marcombo.com/wp-content/uploads/2017/10/9788426722966.jpg",
      },
      {
        nombre: "Estudiante12",
        opinion:
          "Me ayudó a mejorar mis habilidades de resolución de problemas",
        imagen:
          "https://www.marcombo.com/wp-content/uploads/2017/10/9788426722966.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Arquitectura e Ingeniería de Computadores",
    descripcion: "Estudio de la arquitectura y diseño de computadoras",
    imagen:
      "https://m.media-amazon.com/images/I/61pENPma2vL._AC_UF1000,1000_QL80_.jpg",
    obligatorio: false,
    creditos: 3,
    opiniones: [
      {
        nombre: "Estudiante13",
        opinion:
          "Interesante pero algunos conceptos fueron difíciles de entender",
        imagen:
          "https://m.media-amazon.com/images/I/61pENPma2vL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nombre: "Estudiante14",
        opinion: "Buena introducción al diseño de computadoras",
        imagen:
          "https://m.media-amazon.com/images/I/61pENPma2vL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Bases de datos",
    descripcion: "Conceptos fundamentales sobre bases de datos",
    imagen: "https://bookdown.org/paranedagarcia/database/images/cover.jpg",
    obligatorio: true,
    creditos: 6,
    opiniones: [
      {
        nombre: "Estudiante15",
        opinion: "Muy útil para comprender el diseño de bases de datos",
        imagen: "https://bookdown.org/paranedagarcia/database/images/cover.jpg",
      },
      {
        nombre: "Estudiante16",
        opinion: "Me gustó la combinación de teoría y práctica",
        imagen: "https://bookdown.org/paranedagarcia/database/images/cover.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Análisis e Ingeniería de Requisitos",
    descripcion: "Proceso de recopilación y análisis de requisitos",
    imagen:
      "https://m.media-amazon.com/images/I/614-l1k9R5L._AC_UF1000,1000_QL80_.jpg",
    obligatorio: false,
    creditos: 4,
    opiniones: [
      {
        nombre: "Estudiante17",
        opinion:
          "Interesante pero algunos conceptos fueron difíciles de entender",
        imagen:
          "https://m.media-amazon.com/images/I/614-l1k9R5L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nombre: "Estudiante18",
        opinion: "Buena introducción al análisis de requisitos",
        imagen:
          "https://m.media-amazon.com/images/I/614-l1k9R5L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Métodos Operativos y Estadísticos de Gestión",
    descripcion: "Estudio de métodos operativos y estadísticos en gestión",
    imagen:
      "https://image.isu.pub/170828200400-b533b86fc30245ec67a3d1551785a035/jpg/page_1_thumb_large.jpg",
    obligatorio: true,
    creditos: 5,
    opiniones: [
      {
        nombre: "Estudiante19",
        opinion: "Curso esencial para entender la gestión estadística",
        imagen:
          "https://image.isu.pub/170828200400-b533b86fc30245ec67a3d1551785a035/jpg/page_1_thumb_large.jpg",
      },
      {
        nombre: "Estudiante20",
        opinion: "Buena combinación de teoría y práctica",
        imagen:
          "https://image.isu.pub/170828200400-b533b86fc30245ec67a3d1551785a035/jpg/page_1_thumb_large.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Redes de computadores",
    descripcion: "Exploración de redes informáticas y comunicación",
    imagen:
      "https://m.media-amazon.com/images/I/61kV4uArUuL._AC_UF1000,1000_QL80_.jpg",
    obligatorio: false,
    creditos: 4,
    opiniones: [
      {
        nombre: "Estudiante21",
        opinion: "Muy práctico para entender el funcionamiento de las redes",
        imagen:
          "https://m.media-amazon.com/images/I/61kV4uArUuL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nombre: "Estudiante22",
        opinion: "Me ayudó a comprender la comunicación en redes",
        imagen:
          "https://m.media-amazon.com/images/I/61kV4uArUuL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  });

  addAsignatura({
    nombre: "Diseño y Análisis de Algoritmos",
    descripcion: "Desarrollo y análisis de algoritmos eficientes",
    imagen:
      "https://m.media-amazon.com/images/I/711R-fs272L._AC_UF1000,1000_QL80_.jpg",
    obligatorio: false,
    creditos: 5,
    opiniones: [
      {
        nombre: "Estudiante23",
        opinion: "Curso desafiante pero enriquecedor",
        imagen:
          "https://m.media-amazon.com/images/I/711R-fs272L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nombre: "Estudiante24",
        opinion: "Me ayudó a mejorar mis habilidades de diseño de algoritmos",
        imagen:
          "https://m.media-amazon.com/images/I/711R-fs272L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  });
}