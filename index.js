import data from './modules/data.js';
import { eventosContainer, eventNameInput, searchButton,createCategoryCheckbox, mostrarEventos, filtrarEventos, } from "./modules/funciones.js";

document.addEventListener("DOMContentLoaded", function () {

  const uniqueCategories = Array.from(new Set(data.events.map(event => event.category)));

  uniqueCategories.forEach(createCategoryCheckbox);

  eventNameInput.addEventListener("input", filtrarEventos);
  searchButton.addEventListener("click", filtrarEventos);
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => checkbox.addEventListener("change", filtrarEventos));


  mostrarEventos(data.events);
});
