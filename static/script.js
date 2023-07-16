function showBirthdayMessage(event) {
    event.preventDefault();
    const overlay = document.getElementById('overlay');
    const name = document.getElementById('name').value;
    const floatingText = document.getElementById('floating-text');
    floatingText.innerHTML = `Happy Birthday, ${name}!`;
    overlay.style.display = 'block';
    animateConfetti();
    return false;
}

function hideBirthdayMessage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function animateConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#FFD700', '#F6C500', '#E9B000', '#DCA600', '#CF9600'];
    const numConfetti = 100;

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}
