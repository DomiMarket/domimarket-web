// Botón de login con Discord
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
    // Cambia la URL por la de tu backend en Vercel
    window.location.href = "https://domimarket-login.vercel.app/api/auth/discord";
});
