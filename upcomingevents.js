const contenedor = document.getElementById("contenedorcards")
const  events=data.events
for (let cards of events ) {
  
const card= document.createElement("div")
card.classList.add("card")
card.style.width="15rem"
card.innerHTML=`
  <img src="${cards.image}" class="card-img-top imgcards" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cards.name}</h5>
    <p class="card-text">${cards.description}</p>
  </div>
  <div class="d-flex justify-content-between p-4">
    <h6> Price$ ${cards.price}</h6>
    <a class="btn btn-secondary " role="button" href="details.html?_id=${cards._id}" aria-disabled="true">Details</a>
   </div>` 
contenedor.appendChild(card)

}