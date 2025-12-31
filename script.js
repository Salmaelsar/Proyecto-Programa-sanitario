const form = document.querySelector("Form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Formulario enviado correctamente");
  form.requestFullscreen();
});

