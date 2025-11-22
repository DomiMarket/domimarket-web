document.addEventListener('DOMContentLoaded', () => {
    // -------------------- 1. Funcionalidad de Botones y Redirección Discord --------------------
    const loginButton = document.getElementById('loginBtn');
    const buyButtons = document.querySelectorAll('.buy-btn');
    const panelLink = document.getElementById('panelLink'); // Capturamos el nuevo enlace

    // Estado de login desde localStorage
    const isLoggedIn = localStorage.getItem('domimarket_auth') === 'true';

    // ** URL FINAL CORREGIDA para el flujo de Discord **
    const DISCORD_AUTH_URL = 
        'https://discord.com/api/oauth2/authorize?' +
        'client_id=1438645485773652241' + 
        '&redirect_uri=https%3A%2F%2Fdomimarket.github.io%2Fdomimarket-web%2Fcallback.html' + 
        '&response_type=code' + 
        '&scope=identify'; 
    
    // >>> LÓGICA DE VISIBILIDAD DE BOTONES <<<
    if (isLoggedIn) {
        // Si está logueado, cambia el botón a "Salir"
        loginButton.textContent = 'Salir';
        loginButton.style.backgroundColor = '#FF4500'; // Naranja para Salir
        loginButton.style.boxShadow = 'none'; 
        
        // Muestra el enlace al Panel con display 'inline-block' (CORRECCIÓN)
        if (panelLink) {
            panelLink.style.display = 'inline-block'; 
        }
    } else {
        // Si NO está logueado, ocultamos el Panel 
        if (panelLink) {
            panelLink.style.display = 'none'; 
        }
    }

    // >>> LISTENER DEL BOTÓN DE LOGIN/SALIR <<<
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (isLoggedIn) {
                // Acción de SALIR
                localStorage.removeItem('domimarket_auth');
                window.location.reload(); 
            } else {
                // Acción de INICIAR SESIÓN
                // Ya no guardamos el estado aquí, callback.html lo hará al regresar.
                window.location.href = DISCORD_AUTH_URL; 
            }
        });
    }

    // -------------------- 2. Animaciones Escalonadas (Se mantiene igual) --------------------
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach((link, index) => {
        link.style.setProperty('animation-delay', `${0.6 + index * 0.1}s`); 
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.15}s`; 
    });

    // -------------------- 3. Contador Animado para Métricas (Se mantiene igual) --------------------
    // ... (Mantén el código del contador aquí) ...
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
    // -------------------- FIN del Contador --------------------
});