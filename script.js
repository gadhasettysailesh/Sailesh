// Toggle between dark and light mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('darka-mode');
  if (body.classList.contains('darka-mode')) {
    themeToggle.innerHTML = '<i class="bx bx-sun"></i>'; // Sun icon for light mode
  } else {
    themeToggle.innerHTML = '<i class="bx bx-moon"></i>'; // Moon icon for dark mode
  }
});

// Enlarge skill on click
function enlargeSkill(skill) {
  skill.classList.toggle('enlarged');
}

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter Effect for "Web Developer" and "App Designer"
const animatedText = document.querySelector('.animated-text');
const texts = ["Web Developer", "App Designer"];
let index = 0;

function updateText() {
  animatedText.innerHTML = texts[index] + '<span class="cursor">|</span>'; // Add cursor after text
  index = (index + 1) % texts.length; // Cycle through the texts
}

// Start the typewriter effect immediately
updateText();

// Update text every 6 seconds (matches the CSS animation duration)
setInterval(updateText, 6000);

// Add cursor animation
const cursor = document.querySelector('.cursor');

// Blink cursor animation
function blinkCursor() {
  if (cursor) {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }
}

setInterval(blinkCursor, 500); // Blink every 500ms