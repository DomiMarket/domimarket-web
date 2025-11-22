document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');

    // 1. Animación escalonada para enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        // Asigna un retraso progresivo
        link.style.setProperty('animation-delay', `${0.6 + index * 0.1}s`); 
    });

    // 2. Animación escalonada para tarjetas de producto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        // Asigna un retraso progresivo para las tarjetas
        card.style.animationDelay = `${0.3 + index * 0.15}s`; 
    });

    // 3. Funcionalidad para el botón "Iniciar Sesión"
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('¡Bienvenido a DomiMarket! El sistema de inicio de sesión necesita más código backend para funcionar, pero la función fue llamada.');
        });
    }

    // 4. Funcionalidad para los botones "Comprar"
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Has seleccionado el producto: "${productName}". Redireccionando a la pasarela de pago...`);
        });
    });
});