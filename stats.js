import {  apiUrl } from "./modules/funciones.js";
fetch( apiUrl).then(Response=>Response.json()).then(data=>{
    const datos=data.events
    console.log(datos);
  
  })