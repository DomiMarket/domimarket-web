// Botón de login con Discord
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
    // Cambia esta URL por tu backend de Vercel
    window.location.href = "https://domimarket-login.vercel.app/api/auth/discord";
});

// Animaciones de fade-in al scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.style.animationPlayState = "running";
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
