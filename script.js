document.addEventListener('DOMContentLoaded', () => {
    // -------------------- 1. Funcionalidad de Botones y Redirección Discord --------------------
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');

    // ** URL FINAL CORREGIDA para el flujo de Discord **
    const DISCORD_AUTH_URL = 
        'https://discord.com/api/oauth2/authorize?' +
        'client_id=1438645485773652241' + 
        '&redirect_uri=https%3A%2F%2Fdomimarket.github.io%2Fdomimarket-web%2Fcallback.html' + 
        '&response_type=code' + 
        '&scope=identify'; 
    
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = DISCORD_AUTH_URL; 
        });
    }

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