// Login con Discord
document.querySelectorAll(".login-btn, .login-btn-header").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "https://domimarket-login.vercel.app/api/auth/discord";
    });
});
