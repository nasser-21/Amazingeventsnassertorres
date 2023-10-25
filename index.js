const  events=data.events

const filter = document.getElementById("filter");

filter.innerHTML=`
<label><input type="checkbox" id="filterFood Fair"> food</label>
<label><input type="checkbox" id="filterMuseum"> museum</label>
<label><input type="checkbox" id="filterCostume Party"> costume party</label>
<label><input type="checkbox" id="filterMusic Concert"> Concierto de Música</label>
<label><input type="checkbox" id="filterRace"> Carrera</label>
<label><input type="checkbox" id="filterBook Exchange"> Intercambio de Libros</label>
<label><input type="checkbox" id="filterCinema"> Cine</label>`;

  const eventosContainer = document.getElementById("eventosContainer");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  function mostrarEventos(eventos) {
    eventosContainer.innerHTML = "";

    eventos.forEach((evento) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
         <img src="${evento.image}" alt="${evento.name}">
        <h4>${evento.name}</h4>
        <p>Categoría: ${evento.category}</p>
        <p>Descripción: ${evento.description}</p>
        <p>Precio: $${evento.price}</p>
        <a class="btn btn-secondary " role="button" href="details.html?_id=${evento._id}" aria-disabled="true">Details</a>
        
      `;

      eventosContainer.appendChild(card);
    });
  }

  function filtrarEventos() {
    const categoriasSeleccionadas = [...checkboxes]
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id.replace("filter", ""));

    if (categoriasSeleccionadas.length === 0) {
      mostrarEventos(data.events);
    } else {
      const eventosFiltrados = data.events.filter((evento) =>
        categoriasSeleccionadas.includes(evento.category)
      );
      mostrarEventos(eventosFiltrados);
    }
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filtrarEventos);
  });

  mostrarEventos(data.events);

