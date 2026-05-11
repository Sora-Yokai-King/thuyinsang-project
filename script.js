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
const card = document.querySelector('.login-card');
const bg = document.getElementById('bg-animation');
const form = document.getElementById('login-form');

document.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to center
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;

    // 1. Tilt the Login Card (Stronger effect)
    card.style.transform = `rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;

    // 2. Pan the Background (Subtle inverse effect)
    // Moving the background slightly creates the "Cinematic Parallax"
    bg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
});

// Login Logic (remains the same)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.login-btn');
    btn.innerText = "Connecting...";
    setTimeout(() => {
        window.location.href = "portal.html";
    }, 1500);
});
