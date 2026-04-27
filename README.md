# 🏥 Sistema de Gestión - Centro Médico De Salud
Este proyecto es una aplicación web interactiva desarrollada para practicar la manipulación del DOM, la gestión de estados en el cliente mediante LocalStorage y el diseño responsivo con CSS moderno.

El objetivo principal fue simular un entorno real de una clínica médica, enfocándome en la validación de formularios y la persistencia de datos sin necesidad de un backend.

## 🚀 Características Principales
Gestión de Citas en Tiempo Real: Interfaz para registrar y eliminar pacientes utilizando un sistema de simulación de base de datos local.

Validación de Formularios Robusta: Implementación de expresiones regulares (RegEx) para validar correos electrónicos y números de teléfono en el formulario de contacto.

Persistencia de Datos: Uso de localStorage para que la información de los pacientes no se pierda al recargar la página.

Diseño UX/UI Responsivo: Layout adaptativo que utiliza variables CSS para mantener la consistencia visual en dispositivos móviles y escritorio.

Navegación Fluida: Menú de navegación con anclajes internos para una experiencia de usuario de una sola página (Single Page Experience).

## 🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica avanzada.

CSS3: Uso de variables nativas, Flexbox para el layout y Media Queries.

JavaScript (ES6+): Manipulación dinámica del DOM, manejo de eventos y almacenamiento local.

## 🧠 Desafíos y Aprendizaje
Durante el desarrollo de este proyecto, me enfrenté a varios retos técnicos que me ayudaron a mejorar mis habilidades:

Sincronización del Estado: El mayor reto fue asegurar que la lista visual de pacientes estuviera siempre sincronizada con el array en memoria y el localStorage. Lo solucioné creando una función centralizada de renderizado (renderPatients).

Validación de Datos: Implementar una lógica que detectara campos vacíos o formatos de correo incorrectos antes de procesar la solicitud, mejorando la calidad de la información recibida.

Experiencia de Usuario (UX): Diseñé un sistema de feedback visual mediante clases CSS (success y error) que informan al usuario sobre el resultado de sus acciones en tiempo real.
