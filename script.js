document.addEventListener('DOMContentLoaded', () => {
    // -------------------- 1. Funcionalidad de Botones y Alertas --------------------
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');

    loginButton.addEventListener('click', () => {
        alert('¡Bienvenido a DomiMarket! El sistema de inicio de sesión necesita más código backend para funcionar, pero la función fue llamada.');
    });

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Has seleccionado el producto: "${productName}". Redireccionando a la pasarela de pago...`);
        });
    });

    // -------------------- 2. Animaciones Escalonadas --------------------
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        link.style.setProperty('animation-delay', `${0.6 + index * 0.1}s`); 
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.15}s`; 
    });

    // -------------------- 3. Contador Animado para Métricas --------------------
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricNumbers = document.querySelectorAll('.metric-number');
                metricNumbers.forEach(item => {
                    const finalValueStr = item.getAttribute('data-target');
                    let finalValue = parseInt(finalValueStr.replace('+', '').replace('K', '00')); 
                    
                    let startValue = 0;
                    const duration = 2000; 
                    const stepTime = 10; 
                    const increment = finalValue / (duration / stepTime);

                    const timer = setInterval(() => {
                        startValue += increment;
                        
                        if (startValue >= finalValue) {
                            clearInterval(timer);
                            item.textContent = finalValueStr; 
                        } else {
                            item.textContent = "+" + Math.floor(startValue); 
                        }
                    }, stepTime);
                    
                    observer.unobserve(entry.target); 
                });
            }
        });
    }, { threshold: 0.5 });

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        counterObserver.observe(metricsSection);
    }
});