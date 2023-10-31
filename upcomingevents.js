import data from './modules/data.js';
import { searchButton ,eventNameInput,checkboxContainer,eventosContainer,eventsToShow ,eventsIn2023,createCategoryCheckbox, mostrarEventos, filtrarEventos2 } from "./modules/funciones.js";
console.log(data);


 
document.addEventListener("DOMContentLoaded", function () {
  

  
  const uniqueCategories = Array.from(new Set(eventsToShow.map(event => event.category)));
  

  console.log(uniqueCategories);

  
  

uniqueCategories.forEach(createCategoryCheckbox);



  eventNameInput.addEventListener("input", filtrarEventos2);
  searchButton.addEventListener("click", filtrarEventos2);
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => checkbox.addEventListener("change", filtrarEventos2));


  mostrarEventos(eventsToShow);
});
