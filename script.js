document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js cargado");

  // - - - - - - - - - - PEDIR CITA (contactForm) - - - - - - - - - -
  const form = document.getElementById("contactForm");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const fecha = document.getElementById("fecha");
  const mensaje = document.getElementById("mensaje");
  const formMessage = document.getElementById("formMessage");

  if (!form || !nombre || !email || !telefono || !fecha || !mensaje || !formMessage) {
    console.warn("Falta algún elemento del formulario de cita.");
  } else {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      formMessage.textContent = "";
      formMessage.className = "";

      const nombreValue = nombre.value.trim();
      const emailValue = email.value.trim().toLowerCase();
      const telefonoValue = telefono.value.trim();
      const fechaValue = fecha.value.trim();
      const mensajeValue = mensaje.value.trim();

      if (!nombreValue || !emailValue || !telefonoValue || !fechaValue || !mensajeValue) {
        formMessage.textContent =
          "Por favor, completa todos los campos del formulario de cita.";
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

      const telefonoOK = /^[0-9+\s\-]{6,}$/.test(telefonoValue);
      if (!telefonoOK) {
        formMessage.textContent =
          "Por favor, introduce un número de teléfono válido.";
        formMessage.classList.add("error");
        return;
      }

      formMessage.textContent =
        "Hemos recibido tu solicitud de cita, " +
        nombreValue +
        ". Nos pondremos en contacto contigo para confirmar fecha y hora.";
      formMessage.classList.add("success");

      setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "";
      }, 4000);

      form.reset();
    });
  }

  // - - - - - - - - - - CITAS REGISTRADAS (simulación localStorage) - - - - - - - - - -
  const patientForm = document.getElementById("patientForm");
  const patientList = document.getElementById("patientList");

  if (!patientForm || !patientList) {
    console.warn("Falta patientForm o patientList en el HTML.");
    return;
  }

  let patients = JSON.parse(localStorage.getItem("patients")) || [];

  function savePatients() {
    localStorage.setItem("patients", JSON.stringify(patients));
  }

  function renderPatients() {
    patientList.innerHTML = "";

    if (patients.length === 0) {
      patientList.innerHTML = "<p>No hay citas registradas.</p>";
      return;
    }

    patients.forEach((patient, index) => {
      const div = document.createElement("div");
      div.classList.add("patient-card");
      div.innerHTML = `
        <p><strong>Nombre:</strong> ${patient.name}</p>
        <p><strong>Edad:</strong> ${patient.age}</p>
        <button data-index="${index}" class="delete-patient">Eliminar</button>
      `;
      patientList.appendChild(div);
    });
  }

  // Pintar citas guardadas al cargar
  renderPatients();

  patientForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = patientForm.elements["name"].value.trim();
    const age = patientForm.elements["age"].value.trim();

    if (!name || !age) {
      alert("Por favor, completa todos los campos antes de registrar la cita.");
      return;
    }

    patients.push({ name, age });
    savePatients();
    renderPatients();
    patientForm.reset();
  });

  patientList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-patient")) {
      const index = e.target.getAttribute("data-index");
      patients.splice(index, 1);
      savePatients();
      renderPatients();
    }
  });
});
