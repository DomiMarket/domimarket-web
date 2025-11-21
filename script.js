// Login con Discord
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
    window.location.href = "https://domimarket-login.vercel.app/api/auth/discord";
});
