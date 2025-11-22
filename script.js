// En tu archivo script.js, dentro de document.addEventListener('DOMContentLoaded', ...)

// -------------------- 1. Funcionalidad de Botones y Redirección Discord --------------------
const loginButton = document.getElementById('loginBtn');
const buyButtons = document.querySelectorAll('.buy-btn');
const panelLink = document.getElementById('panelLink'); 

// >>> LÍNEA DE PRUEBA AQUÍ <<<
console.log('Botón de Login encontrado:', loginButton); // ¡Añade esta línea!

// Estado de login desde localStorage
const isLoggedIn = localStorage.getItem('domimarket_auth') === 'true';

// ... (El resto del script continúa aquí) ...

// ...