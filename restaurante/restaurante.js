const restaurantBackground = new URL(
    "../media/Sudado%20montañero.jpeg",
    document.baseURI
).href;

document.body.style.setProperty(
    "--restaurant-background",
    `url("${restaurantBackground}")`
);