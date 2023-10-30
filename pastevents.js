import data from './modeles/data.js';

document.addEventListener("DOMContentLoaded", function () {
  const eventosContainer = document.getElementById("eventosContainer");
  const checkboxContainer = document.getElementById("checkboxContainer");
  const eventNameInput = document.getElementById("eventNameInput");
  const searchButton = document.getElementById("searchButton");

 


  
  const uniqueCategories = Array.from(new Set(data.events.map(event => event.category)));

 
  uniqueCategories.forEach(category => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `filter${category}`;
    checkbox.className = "filter-checkbox";
    checkboxContainer.appendChild(checkbox);

    const label = document.createElement("label");
    label.htmlFor = `filter${category}`;
    label.innerText = category;
    checkboxContainer.appendChild(label);
  });

  function mostrarEventos(eventos) {
    eventosContainer.innerHTML = "";

    eventos.forEach((evento) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${evento.image}" alt="${evento.name}">
        <h2>${evento.name}</h2>
        <p>Descripción: ${evento.description}</p>
        <p>Precio: $${evento.price}</p>
        <a class="btn btn-secondary " role="button" href="details.html?_id=${evento._id}" aria-disabled="true">Details</a>
        
      `;

      eventosContainer.appendChild(card);
    });
  }

  function filtrarEventos() {
    const categoriasSeleccionadas = [...document.querySelectorAll('.filter-checkbox')]
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id.replace("filter", ""));

    const nombreBuscado = eventNameInput.value.toLowerCase().trim();

    const eventosFiltrados = data.events.filter((evento) => {
      const categoriaCoincide = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
      const nombreCoincide = evento.name.toLowerCase().includes(nombreBuscado);
      return categoriaCoincide && nombreCoincide;
    });

    mostrarEventos(eventosFiltrados);
  }

  eventNameInput.addEventListener("input", filtrarEventos);
  searchButton.addEventListener("click", filtrarEventos);
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => checkbox.addEventListener("change", filtrarEventos));

 
  mostrarEventos(data.events);
});
