document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');

    // 1. Animación escalonada para enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        // Asigna un retraso progresivo: 0.6s, 0.7s, 0.8s, etc.
        link.style.setProperty('animation-delay', `${0.6 + index * 0.1}s`); 
    });

    // 2. Animación escalonada para tarjetas de producto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        // Asigna un retraso progresivo para las tarjetas: 0.3s, 0.45s, 0.6s, etc.
        card.style.animationDelay = `${0.3 + index * 0.15}s`; 
    });

    // 3. Funcionalidad para el botón "Iniciar Sesión"
    loginButton.addEventListener('click', () => {
        alert('¡Bienvenido a DomiMarket! El sistema de inicio de sesión necesita más código backend para funcionar, pero la función fue llamada.');
    });

    // 4. Funcionalidad para los botones "Comprar"
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Has seleccionado el producto: "${productName}". Redireccionando a la pasarela de pago...`);
        });
    });
});