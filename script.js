// Obtener los elementos de los botones por su clase
const buttons = document.querySelectorAll(".btn");

// Función para redirigir a una URL específica cuando se hace clic en un botón
function redirectToPage(url) {
  window.location.href = url;
}

// Agregar un manejador de eventos de clic a cada botón
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Verificar qué botón se hizo clic y redirigir en consecuencia
    if (this.innerText === "Botón 1") {
      redirectToPage("pagina1.html"); // Cambia 'pagina1.html' a la URL deseada
    } else if (this.innerText === "Botón 2") {
      redirectToPage("pagina2.html"); // Cambia 'pagina2.html' a la URL deseada
    } else if (this.innerText === "Botón 3") {
      redirectToPage("pagina3.html"); // Cambia 'pagina3.html' a la URL deseada
    } else if (this.innerText === "Botón 4") {
      redirectToPage("pagina4.html"); // Cambia 'pagina4.html' a la URL deseada
    }
    // Agrega más condiciones según sea necesario para otros botones
  });
});
