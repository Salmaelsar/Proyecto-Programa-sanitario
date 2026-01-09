document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js cargado");

  const form = document.getElementById("contactForm");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const formMessage = document.getElementById("formMessage");

  if (!form || !nombre || !email || !mensaje || !formMessage) {
    console.warn("Falta algún elemento: contactForm/nombre/email/mensaje/formMessage");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset mensaje
    formMessage.textContent = "";
    formMessage.className = "";

    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim().toLowerCase();
    const mensajeValue = mensaje.value.trim();

    if (!nombreValue || !emailValue || !mensajeValue) {
      formMessage.textContent = "Por favor, completa todos los campos del formulario.";
      formMessage.classList.add("error");
      return;
    }

    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailValue);
    if (!emailOK) {
      formMessage.textContent =
        "Por favor, introduce un correo electrónico válido (ej: ejemplo@dominio.com).";
      formMessage.classList.add("error");
      return;
    }

    // OK
    formMessage.textContent =
      "Gracias por contactarnos, " + nombreValue + ". Te responderemos pronto.";
    formMessage.classList.add("success");
    setTimeout(() => {
  formMessage.textContent = "";
  formMessage.className = "";
}, 3500);


    form.reset();
  });
});
