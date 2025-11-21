// Acción del botón de Discord
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
    // Reemplaza esta URL con tu backend de Vercel que maneja login de Discord
    window.location.href = "https://domimarket-login.vercel.app/api/auth/discord";
});
