const card = document.querySelector('.login-card');
const form = document.getElementById('login-form');

// 1. Interactive Motion Effect
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 2. Logic to redirect to portal.html
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulating a load time for cinematic effect
    const btn = document.querySelector('.login-btn');
    btn.innerText = "Authenticating...";
    
    setTimeout(() => {
        // Redirect to your portal.html
        window.location.href = "portal.html";
    }, 1500);
});
