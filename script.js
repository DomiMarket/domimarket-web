<blockquote class="not-prose">
document.addEventListener('DOMContentLoaded', () => {
    // -------------------- 1. Funcionalidad de Login/Salir (Botón de la Navbar) --------------------
    const loginButton = document.getElementById('loginBtn');
    
    // Verifica si el usuario ya inició sesión (usando localStorage)
    const isLoggedIn = localStorage.getItem('domimarket_auth') === 'true';

    // URL de autorización de Discord (usada si el usuario no ha iniciado sesión)
    const DISCORD_AUTH_URL = 
        'https://discord.com/api/oauth2/authorize?' +
        'client_id=1438645485773652241' + 
        '&redirect_uri=https%3A%2F%2Fdomimarket.github.io%2Fdomimarket-web%2Fcallback.html' + 
        '&response_type=code' + 
        '&scope=identify'; 
    
    // Ajusta el texto del botón si el usuario está logueado
    if (isLoggedIn) {
        loginButton.textContent = 'Salir';
        loginButton.style.backgroundColor = '#FF4500'; // Color de "Salir"
        loginButton.style.boxShadow = 'none'; 
    }

    // Listener para el botón de Login/Salir
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (isLoggedIn) {
                // Acción de SALIR: Borra la sesión y recarga
                localStorage.removeItem('domimarket_auth');
                window.location.reload(); 
            } else {
                // Acción de INICIAR SESIÓN: Redirige a Discord
                window.location.href = DISCORD_AUTH_URL; 
            }
        });
    }

    // -------------------- 2. Contador Animado (Sección de Métricas) --------------------
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricNumbers = document.querySelectorAll('.metric-number');
                metricNumbers.forEach(item => {
                    const finalValueStr = item.getAttribute('data-target');
                    // Convierte '+1.5K' a 1500, etc.
                    let finalValue = parseInt(finalValueStr.replace('+', '').replace('K', '00')); 
                    
                    let startValue = 0;
                    const duration = 2000; // Duración de la animación en milisegundos
                    const stepTime = 10; // Intervalo de actualización
                    const increment = finalValue / (duration / stepTime);

                    const timer = setInterval(() => {
                        startValue += increment;
                        
                        if (startValue >= finalValue) {
                            clearInterval(timer);
                            item.textContent = finalValueStr; // Muestra el valor final (ej: "+1.5K")
                        } else {
                            item.textContent = "+" + Math.floor(startValue); // Muestra la animación
                        }
                    }, stepTime);
                    
                    observer.unobserve(entry.target); // Detiene la observación una vez que se activa
                });
            }
        });
    }, { threshold: 0.5 });

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        counterObserver.observe(metricsSection);
    }

    // -------------------- 3. Funcionalidad: Ver Todos los Productos --------------------
    const loadMoreBtn = document.querySelector('.load-more-btn');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Redirige a la URL externa solicitada
            window.location.href = 'https://etvxstore.lat/productos'; 
        });
    }

});
</blockquote>

---
**Recuerda:** Siempre que modifiques un archivo JavaScript, haz una **recarga forzada** en tu navegador (`Ctrl + Shift + R` en Windows/Linux o `Cmd + Shift + R` en Mac) para asegurar que el código nuevo sea el que se ejecute. ¡Así tu página estará perfecta! 👍