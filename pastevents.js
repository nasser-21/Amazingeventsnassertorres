import data from './modules/data.js';
import { searchButton ,eventNameInput,checkboxContainer,eventosContainer,createCategoryCheckbox, mostrarEventos, filtrarEventos22 } from "./modules/funciones.js";
console.log(data);


const eventsIn2022 = data.events.filter(event => !event.date.startsWith("2023"));
const eventsToShow22 = eventsIn2022.slice(0, 7);

document.addEventListener("DOMContentLoaded", function () {
  
 


  
  const uniqueCategories = Array.from(new Set(eventsToShow22.map(event => event.category)));
  
 
  

uniqueCategories.forEach(createCategoryCheckbox);




  

  eventNameInput.addEventListener("input", filtrarEventos22);
  searchButton.addEventListener("click", filtrarEventos22);
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => checkbox.addEventListener("change", filtrarEventos22));

 
  mostrarEventos(eventsToShow22);
});
