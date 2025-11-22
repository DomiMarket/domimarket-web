script js : // -------------------- 1. Funcionalidad de Botones y Redirección Discord --------------------
const loginButton = document.getElementById('loginBtn');
const buyButtons = document.querySelectorAll('.buy-btn');

// ** URL FINAL CORREGIDA para el flujo de Discord **
const DISCORD_AUTH_URL = 
    'https://discord.com/api/oauth2/authorize?' +
    'client_id=1438645485773652241' + 
    '&redirect_uri=https%3A%2F%2Fdomimarket.github.io%2Fdomimarket-web%2Fcallback.html' + 
    '&response_type=code' + 
    '&scope=identify'; 

// >>> NUEVO: Función que actualiza el estado del botón al cargar la página <<<
const isLoggedIn = localStorage.getItem('domimarket_auth') === 'true';

if (isLoggedIn) {
    // Si está logueado, cambia el botón a "Salir"
    loginButton.textContent = 'Salir';
    // Opcional: Cambia el estilo para que se vea diferente al estar logueado
    loginButton.style.backgroundColor = '#FF4500'; // Naranja para Salir
}

// >>> NUEVO: El Listener debe revisar el estado antes de actuar <<<
if (loginButton) {
    loginButton.addEventListener('click', () => {
        if (isLoggedIn) {
            // Acción de SALIR
            // 1. Borrar el estado de localStorage
            localStorage.removeItem('domimarket_auth');
            // 2. Recargar la página para ver el botón de Iniciar Sesión de nuevo
            window.location.reload(); 
        } else {
            // Acción de INICIAR SESIÓN
            // 1. Marcar el estado como logueado ANTES de redirigir (Simulación)
            localStorage.setItem('domimarket_auth', 'true');
            // 2. Redirigir a Discord
            window.location.href = DISCORD_AUTH_URL; 
        }
    });
}
// ... (El resto del código de buyButtons se mantiene igual) ...