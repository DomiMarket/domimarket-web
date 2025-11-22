document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');

    // Animación escalonada para enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        link.style.setProperty('--delay', `${0.6 + index * 0.1}s`); // Retraso progresivo
    });

    // Animación escalonada para tarjetas de producto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.15}s`; // Retraso progresivo para cada tarjeta
    });

    // Funcionalidad para el botón "Iniciar Sesión"
    loginButton.addEventListener('click', () => {
        alert('¡Bienvenido a DomiMarket! El sistema de inicio de sesión necesita más código backend para funcionar, pero la función fue llamada.');
    });

    // Funcionalidad para los botones "Comprar"
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Has seleccionado el producto: "${productName}". Redireccionando a la pasarela de pago...`);
        });
    });
});