export const apiUrl = `https://mindhub-xj03.onrender.com/api/amazing`
export const eventosContainer = document.getElementById("eventosContainer");
export const checkboxContainer = document.getElementById("checkboxContainer");
export const eventNameInput = document.getElementById("eventNameInput");
export const searchButton = document.getElementById("searchButton");

export function mostrarEventos(eventos) {
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

export function filtrarEventos() {
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