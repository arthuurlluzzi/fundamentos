const MAX = 3;
let cargarMasAsignaturas = 0;
async function cargarMas() {
  const from = (cargarMasAsignaturas + 1) * MAX;
  const to = from + MAX;

  const respuesta = await fetch(`/asignatura?from=${from}&to=${to}`);

  const newAsignatura = await respuesta.text();

  const asignaturaDev = document.querySelector(".loadd");

  asignaturaDev.innerHTML += newAsignatura;

  cargarMasAsignaturas++;
  setupCheckboxFunctionality();
}
/* ---------------------BARRAS DE BUSQUEDA---------------------------- */

function handleInputVisibility() {
  //me detecta cambios en el input con el addeventliserner
  const input = document.getElementById("buscador");
  const rowContainer = document.getElementById("dinamico");
  buscar();
  if (input.value === "") {
    rowContainer.style.display = "block";
  } else {
    rowContainer.style.display = "none ";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("buscador")
    .addEventListener("input", handleInputVisibility);
});
let timerId; 
async function buscar() {
  const searchTerm = document.getElementById("buscador").value;

  if (searchTerm !== "") {
    const resultadosDiv = document.getElementById("row");
    document.getElementById("resultados_busqueda").style.display = "block";
    document.getElementById("filtros").style.display = "block";
    document.getElementById("no-resultados").style.display = "none";
    // Limpiar resultados anteriores
    resultadosDiv.innerHTML = "";
    console.log(resultadosDiv.innerHTML);
    // Cancelar la búsqueda anterior (si existe) para evitar solicitudes innecesarias
    clearTimeout(timerId);

    // Programar una nueva búsqueda después de un breve retraso

    try {
      const response = await fetch(`/buscar?term=${searchTerm}`);

      // Obtener el contenido de la respuesta como texto
      const newRespuesta = await response.text();

      // Verificar si la respuesta tiene contenido antes de procesarla como texto
      if (newRespuesta !== "") {
        console.log(resultadosDiv);
        // Mostrar nuevos resultados
        document.getElementById("filtros").style.display = "none";
        resultadosDiv.innerHTML += newRespuesta;
      } else {
        console.error("Error al buscar: Respuesta vacía o no válida");
        document.getElementById("resultados_busqueda").style.display = "none";
        document.getElementById("no-resultados").style.display = "block";
        document.getElementById("filtros").style.display = "none";
      }
    } catch (error) {
      console.error("Error al buscar:", error.message);
      document.getElementById("resultados_busqueda").style.display = "none";
      document.getElementById("no-resultados").style.display = "block";
      document.getElementById("filtros").style.display = "none";
    }
  } else {
    document.getElementById("resultados_busqueda").style.display = "none";
    document.getElementById("no-resultados").style.display = "none";
    document.getElementById("filtros").style.display = "block";
  }
}
function aumentarAncho() {
  document.getElementById("buscador").style.width = "500px";
}
function disminuirAncho() {
  document.getElementById("buscador").style.width = "300px";
}
/* ----------------------------------------------- */
async function guardar() {
  const esFormularioValido = await validateForm();
console.log(esFormularioValido);
  if (esFormularioValido === true) {
    document.forms[0].submit();
  
  } else {
    return false;
  }
}



async function verificarDatos() {
  const nombre = document.getElementById('titulo').value;
const imagen = document.getElementById('imagen');
const descripcion = document.getElementById('descripcion').value;
const creditos = document.getElementById('creditos').value;
var errorContainer4 = document.getElementById("error-servidor");

const respuestaDatos = await fetch(`/datos?nombre=${nombre}&descripcion=${descripcion}&creditos=${creditos}`);

const datos = await respuestaDatos.json();
const success = datos.success;
const message = datos.message;
  if (success  === true) { 
    errorContainer4.innerHTML = "";
      return true;
  } else {
      errorContainer4.innerHTML = message;
    return false;
  }
}
async function validateForm() {
    if (controlador0 === 0 && controlador1 === 0 && controlador2 === 0 && controlador3 === 0) {
      const datosVerificados = await verificarDatos();
      if (datosVerificados === true) {
        return true;
      } else {
        return false;
      }
    } 
  

  return false;
}

 var controlador0 = 0;
  var controlador1 = 0;
  var controlador2 = 0;
  var controlador3 = 0;
function validarCampo(id) {
  var campo = document.getElementById(id);
  var valor = campo.value.trim();
  var errorContainer0 = document.getElementById("error-title");
  var errorContainer1 = document.getElementById("error-imagen");
  var errorContainer2 = document.getElementById("error-descripcion");
  var errorContainer3 = document.getElementById("error-creditos");
 
  switch (id) {
    case "titulo":
      var resultadoValidacionTitulo = validarTitulo(
        document.getElementById("titulo").value.trim()
      );
      if (resultadoValidacionTitulo.valido === true) {
        errorContainer0.innerHTML = "";
        controlador0 = 0;
      } else {
        errorContainer0.innerHTML = resultadoValidacionTitulo.mensaje;
        controlador0 = 1;
      }
      break;

    case "imagen":
      var resultadoValidacionUrl = esURLValida(
        document.getElementById("imagen").value.trim()
      );
      if (resultadoValidacionUrl === true) {
        errorContainer1.innerHTML = "";
        controlador1 = 0;
      } else {
        errorContainer1.innerHTML = "La URL de la imagen no es válida.";
        controlador1 = 1;
      }
      break;

    case "descripcion":
      var resultadoValidacionDescripcion = validarDescripcion(
        document.getElementById("descripcion").value.trim()
      );
      if (resultadoValidacionDescripcion.valido === true) {
        errorContainer2.innerHTML = "";
        controlador2 = 0;
      } else {
        errorContainer2.innerHTML = resultadoValidacionDescripcion.mensaje;
        controlador2 = 1;
      }
      break;

    case "creditos":
      if (valor !== "" && !isNaN(valor)) {
        errorContainer3.innerHTML = "";
        controlador3 = 0;
      } else {
        errorContainer3.innerHTML = "El campo créditos debe ser un número.";
        controlador3 = 1;
      }
      break;
    // Puedes agregar más casos según los campos que tengas en tu formulario
  }
}
function validarTitulo(titulo) {
  // Validar si el campo título no está vacío
  if (titulo.trim() === "") {
    return {
      valido: false,
      mensaje: "El campo título no debe estar vacío.",
    };
  }

  // Validar si el primer carácter es una letra mayúscula
  if (titulo.charAt(0) !== titulo.charAt(0).toUpperCase()) {
    return {
      valido: false,
      mensaje:
        "El campo título debe tener como primer carácter una letra mayúscula.",
    };
  }

  // Si pasa ambas validaciones, el campo es válido
  return {
    valido: true,
    mensaje: "Campo título válido.",
  };
}
function validarDescripcion(descripcion) {
  // Validar si el campo descripción no está vacío
  if (descripcion.trim() === "") {
    return {
      valido: false,
      mensaje: "El campo descripción no debe estar vacío.",
    };
  }

  // Validar la longitud del campo descripción
  var longitud = descripcion.length;
  if (longitud < 50 || longitud > 500) {
    return {
      valido: false,
      mensaje: "El campo descripción debe contener entre 50 y 500 caracteres.",
    };
  }

  // Si pasa ambas validaciones, el campo es válido
  return {
    valido: true,
    mensaje: "Campo descripción válido.",
  };
}
function esURLValida(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
/* ----------------------------------------------- */

function filtro(key) {
  switch (key) {
    case 1:
      optativas();      
      break;

    case 2:
    obligatoria();
    break;
    
    case 3:
      toggleVisibility();
    break;

    default:
      break;
  }
}
function obligatoria() {
  var contenedor = document.getElementById('dinamico');
  var elementos = contenedor.getElementsByClassName('true');
  toggleVisibilityNone();
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block';
  }
}
function optativas() {
  var contenedor = document.getElementById('dinamico');
  var elementos = contenedor.getElementsByClassName('false');
  toggleVisibilityNone();
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block';
  }
}
function toggleVisibilityNone() {
  var contenedor = document.getElementById('dinamico');
  var elementos = contenedor.getElementsByClassName('col-lg-4 col-sm-6 mb-4');

  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
}
function toggleVisibility() {
      var contenedor = document.getElementById('dinamico');
      var elementos = contenedor.getElementsByClassName('col-lg-4 col-sm-6 mb-4');

      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
      }
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('radio3').checked = true;
});
/* ----------------------------------------------- */
var controler = 0;
function lateral_bar() {
  var elemento = document.querySelector(".col-md-12");
  const lateral = document.getElementById("lateral");
  const lateral0 = document.getElementById("lateral0");

  // Verificar si el elemento existe antes de intentar cambiar la clase
  if (controler === 0) {
    // Cambiar la clase por otra
    elemento.classList.remove("col-md-12");
    elemento.classList.add("col-md-10"); // Reemplaza 'nueva-clase' con el nombre de la clase que desees
    controler = 1;
    lateral0.style.display = "block";

    lateral.style.display = "block";
  } else {
    var elemento = document.querySelector(".col-md-10");
    elemento.classList.remove("col-md-10");
    elemento.classList.add("col-md-12"); // Re
    controler = 0;
    lateral0.style.display = "none";
    lateral.style.display = "none";
  }
}


/* ----------------------------------------------- */ 
function setupCheckboxFunctionality() {
  // Obtén todos los elementos con la clase 'container2'
  const checkboxes = document.querySelectorAll('.container2 input[type="checkbox"]');

  // Cargar valores almacenados en localStorage
  checkboxes.forEach(checkbox => {
    const id = checkbox.closest('.aline').id;
    const storedValue = localStorage.getItem(`checkbox_${id}`);
    
    if (storedValue) {
      const { isChecked, title } = JSON.parse(storedValue);
      checkbox.checked = isChecked;
      checkbox.setAttribute('data-title', title);
    }

    // Agrega un event listener para detectar cambios en los checkboxes
    checkbox.addEventListener('change', function () {
      const isChecked = this.checked;
      const id = this.closest('.aline').id;
      const title = this.closest('.portfolio-caption').querySelector('.portfolio-caption-heading').innerText;

      // Almacena el valor en localStorage
      localStorage.setItem(`checkbox_${id}`, JSON.stringify({ isChecked, title }));

      // Limpia las entradas no pulsadas en true
      cleanLocalStorage();
    });
  });

  // Función para limpiar localStorage
  function cleanLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith('checkbox_')) {
        const storedValue = JSON.parse(localStorage.getItem(key));

        // Elimina la entrada si el checkbox no está pulsado
        if (!storedValue.isChecked) {
          localStorage.removeItem(key);
          i--; // Ajusta el índice después de eliminar una entrada
        }
      }
    }
  }
  cargarYMostrarTitulos();
}
/* ----------------------------------------------- */ 
// Llama a la función de configuración al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  setupCheckboxFunctionality();
});

function cargarYMostrarTitulos() {
  // Obtén el contenedor de los títulos
  const contenedorTitulos = document.getElementById('contenedor-titulos');

  // Verifica si el elemento existe en el DOM antes de intentar modificarlo
  if (contenedorTitulos) {
    // Limpia el contenido actual del contenedor
    contenedorTitulos.innerHTML = '';

    // Obtén todos los títulos almacenados en localStorage
    const titles = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith('checkbox_')) {
        const storedValue = JSON.parse(localStorage.getItem(key));
        titles.push(storedValue.title);
      }
    }

    // Muestra los títulos en el contenido del contenedor
    titles.forEach(title => {
      const p = document.createElement('p');
      p.textContent = title;
      contenedorTitulos.appendChild(p);
    });
  }
}

// Llama a la función para cargar y mostrar títulos al cargar la página
document.addEventListener('DOMContentLoaded', cargarYMostrarTitulos);