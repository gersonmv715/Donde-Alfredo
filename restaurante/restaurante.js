const restaurantBackground = new URL(
    "../media/Sudado%20montañero.jpeg",
    document.baseURI
).href;

document.body.style.setProperty(
    "--restaurant-background",
    `url("${restaurantBackground}")`
);


function cambiarEstado(mesa) {

    const indicador = mesa.querySelector(".indicador");
    const estado = mesa.querySelector(".estado");

    if (indicador.classList.contains("disponible")) {

        indicador.classList.remove("disponible");
        indicador.classList.add("pendiente");

        estado.textContent = "Pendiente";

    } 
    
    else if (indicador.classList.contains("pendiente")) {

        indicador.classList.remove("pendiente");
        indicador.classList.add("ocupada");

        estado.textContent = "Ocupada";

    } 
    
    else {

        indicador.classList.remove("ocupada");
        indicador.classList.add("disponible");

        estado.textContent = "Disponible";
    }
}