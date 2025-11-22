// En tu archivo script.js, dentro de document.addEventListener('DOMContentLoaded', ...)

// -------------------- 1. Funcionalidad de Botones y Redirección Discord --------------------
const loginButton = document.getElementById('loginBtn');
const buyButtons = document.querySelectorAll('.buy-btn');

// ... (DISCORD_AUTH_URL se mantiene igual) ...

// >>> NUEVO: Función que actualiza el estado del botón al cargar la página <<<
const isLoggedIn = localStorage.getItem('domimarket_auth') === 'true';

if (isLoggedIn) {
    // Si está logueado, cambia el botón a "Salir"
    loginButton.textContent = 'Salir';
    loginButton.style.backgroundColor = '#FF4500'; // Naranja para Salir
    loginButton.style.boxShadow = 'none'; // Quitamos el brillo si es necesario
}

// >>> El Listener debe revisar el estado antes de actuar <<<
if (loginButton) {
    loginButton.addEventListener('click', () => {
        if (isLoggedIn) {
            // Acción de SALIR
            localStorage.removeItem('domimarket_auth');
            window.location.reload(); 
        } else {
            // Acción de INICIAR SESIÓN (Ya no necesitamos guardar el estado aquí, callback.html lo hará)
            window.location.href = DISCORD_AUTH_URL; 
        }
    });
}
// ... (El resto del script.js se mantiene igual) ...antiene igual) ...