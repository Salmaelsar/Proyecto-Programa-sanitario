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

    // ===============================
// REGISTRO DE PACIENTES
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const patientForm = document.getElementById("patientForm");
  const patientList = document.getElementById("patientList");

  if (!patientForm || !patientList) return;

  let patients = JSON.parse(localStorage.getItem("patients")) || [];

  function savePatients() {
    localStorage.setItem("patients", JSON.stringify(patients));
  }

  function renderPatients() {
    patientList.innerHTML = "";

    if (patients.length === 0) {
      patientList.innerHTML = "<p>No hay pacientes registrados.</p>";
      return;
    }

    patients.forEach((patient, index) => {
      const div = document.createElement("div");
      div.classList.add("patient-card");

      div.innerHTML = `
        <strong>${patient.name}</strong><br>
        Edad: ${patient.age}<br>
        Cita: ${patient.date}<br>
        <button data-index="${index}">Eliminar</button>
      `;

      patientList.appendChild(div);
    });
  }

  patientForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const age = document.getElementById("patientAge").value;
    const date = document.getElementById("patientDate").value;

    if (!name || !age || !date) return;

    patients.push({ name, age, date });
    savePatients();
    renderPatients();
    patientForm.reset();
  });

  patientList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = e.target.dataset.index;
      patients.splice(index, 1);
      savePatients();
      renderPatients();
    }
  });

  // Mostrar pacientes al cargar
  renderPatients();
});


  });
});
