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
});
</blockquote>

---

## 3. 🆕 Archivo `productos.html` (Página Dedicada)

**¡CREA ESTE ARCHIVO NUEVO!** Guárdalo en la misma carpeta que tu `index.html` y `style.css`. Esta página tiene el mismo diseño de productos que te gustaba, pero sin la sección de inicio grande.

```html
<blockquote class="not-prose">
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DomiMarket - Todos los Productos</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Estilos específicos para esta página de productos */
        .products-page-header {
            text-align: center;
            padding: 50px 20px;
            background-color: #101c27; /* Mismo color de fondo que la navbar */
        }
        .products-page-header h1 {
            font-size: 40px;
            color: var(--accent-color);
            margin: 0;
        }
    </style>
</head>
<body>

    <header class="navbar">
        <div class="logo">DomiMarket</div>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="productos.html">Productos</a> 
            <a href="index.html#contact-section">Contacto</a>
            <button class="login-btn" id="loginBtn">Iniciar Sesión</button>
        </nav>
    </header>

    <section class="products-page-header">
        <h1>Explora todos nuestros recursos</h1>
        <p>Modelos, Scripts y más contenido premium a tu disposición.</p>
    </section>

    <section class="featured-products" id="products-section">
        <div class="product-grid">
            <div class="product-card">
                <div class="product-image"></div>
                <h3>Apartamentos</h3>
                <p class="description">Apartamentos estilo caserío, texturas editables.</p>
                <p class="price">$0.00 (GRATIS)</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image"></div>
                <h3>Inventario Completo</h3>
                <p class="description">Sistema de Inventario completo para Roleplay.</p>
                <p class="price">$16.00</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image"></div>
                <h3>Plano Ilimitado</h3>
                <p class="description">Plano Ilimitado acceso mensual a todos los productos de la tienda.</p>
                <p class="price">$10.00</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image"></div>
                <h3>Music Studio</h3>
                <p class="description">Estudio de Música moderno y exclusivo en la ciudad.</p>
                <p class="price">$7.00</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image"></div>
                <h3>(Nuevo Producto)</h3>
                <p class="description">Aquí va la descripción del producto 5.</p>
                <p class="price">$XX.XX</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image"></div>
                <h3>(Otro Producto)</h3>
                <p class="description">Aquí va la descripción del producto 6.</p>
                <p class="price">$YY.YY</p>
                <div class="card-actions">
                    <button class="detail-btn">Detalles</button>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
            </div>
        
        </section>

    <footer>
        <p>&copy; 2024 DomiMarket. Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
</blockquote>

**Paso Final:** Guarda los tres archivos (`index.html` modificado, `script.js` modificado y `productos.html` nuevo). Ahora, al darle al botón **"Ver Todos los Productos"** en tu página de inicio, te llevará a la nueva página de tienda.