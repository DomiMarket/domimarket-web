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

    // -------------------- 2. Animaciones Escalonadas (Se mantienen) --------------------
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        link.style.setProperty('animation-delay', `${0.6 + index * 0.1}s`); 
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.15}s`; 
    });

    // -------------------- 3. NUEVA FUNCIÓN: Contador Animado para Métricas --------------------
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricNumbers = document.querySelectorAll('.metric-number');
                metricNumbers.forEach(item => {
                    const finalValueStr = item.getAttribute('data-target');
                    // Limpia el valor para la animación (ej: 1500 de "1.5K")
                    let finalValue = parseInt(finalValueStr.replace('+', '').replace('K', '00')); 
                    
                    let startValue = 0;
                    const duration = 2000; // Duración de 2 segundos
                    const stepTime = 10; // Milisegundos entre cada incremento
                    const increment = finalValue / (duration / stepTime);

                    const timer = setInterval(() => {
                        startValue += increment;
                        
                        // Asegura que no se pase del valor final
                        if (startValue >= finalValue) {
                            clearInterval(timer);
                            // Muestra el valor final como estaba en el HTML (ej: +1.5K)
                            item.textContent = finalValueStr; 
                        } else {
                            // Muestra el número redondeado durante la animación
                            item.textContent = "+" + Math.floor(startValue); 
                        }
                    }, stepTime);
                    
                    observer.unobserve(entry.target); // Detener la observación después de animar
                });
            }
        });
    }, { threshold: 0.5 }); // Inicia cuando el 50% de la sección es visible

    // Aplica el observador a la sección de métricas
    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        counterObserver.observe(metricsSection);
    }
});