const greetButton = document.getElementById('greetButton');
const messageArea = document.getElementById('messageArea');

const messages = [
    "Bonjour ! Merci de visiter ma page.",
    "Le code est poésie 📜.",
    "Pas à pas, on devient expert 🚀.",
    "HTML + CSS + JS = ❤️"
];

greetButton?.addEventListener('click', () => {
    messageArea.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageArea.style.cssText = 'color: #4CAF50; font-weight: bold; opacity: 0;';
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        messageArea.style.opacity = opacity += 0.1;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
});
