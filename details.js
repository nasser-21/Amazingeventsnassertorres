import data from './modeles/data.js';
console.log(data);
const urlparams = new URLSearchParams(window.location.search);
const _id = urlparams.get("_id");

const events = data.events;

let eventsEncontrados = events.find((event) => event._id == _id);

console.log(eventsEncontrados);

const contenedor = document.getElementById("contenedor");


function createCard(arrayevent) {
  const cardt = document.createElement("div");
  cardt.classList.add("card");
  cardt.innerHTML = `
 <img src="${arrayevent.image}" class="card-img-top imgcards p-1" alt="...">
  <div class="card-body">
  <h4 class="card-title p-1"> ${arrayevent.name}</h4>
  <h6 class="card-text p-1">DATE: ${arrayevent.date}</h6>
  <h6 class="card-text p-1">DESCRIPTION: ${arrayevent.description}</h6>
  <h6 class="card-text p-1">CATEGORY: ${arrayevent.category}:</h6>
  <h6 class="card-text p-1">PLACE: ${arrayevent.place}</h6>
  <h6 class="card-text p-1">PLACE: ${arrayevent.capacity}</h6>
  <h6 class="card-text p-1">ASSISTANCE: ${arrayevent.assistance}</h6>
  <h6 class="card-text p-1">CAPACITY: ${arrayevent.price}</h6>
  </div>
  
`;

contenedor.appendChild(cardt)

}
createCard(eventsEncontrados);


