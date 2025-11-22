// En tu archivo script.js:

// ... (código previo) ...

if (isLoggedIn) {
    // Si está logueado, cambia el botón a "Salir"...
    // ...
    
    // >>> CORRECCIÓN AQUÍ: Cambiamos 'block' a 'inline-block' <<<
    if (panelLink) {
        panelLink.style.display = 'inline-block'; // ¡Usar inline-block o inline!
    }
} else {
    // ...
}