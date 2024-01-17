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

      // Actualiza los títulos 
      cargarYMostrarTitulos();
    });
  });
