window.onload = () => {
    document.body.classList.add("loaded");
};

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    hero.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,255,213,0.15),
        transparent 60%)`;
});

const text = "Passionate AI & Machine Learning developer focused on building intelligent, scalable, real-world solutions.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;
