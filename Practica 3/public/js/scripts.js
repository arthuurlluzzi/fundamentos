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