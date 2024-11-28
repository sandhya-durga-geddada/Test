// Variable to hold the interval ID
let heartsInterval;

// Function to create hearts
function hearts() {
    const container = document.querySelector('.a');
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `🩷`;

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';

    container.appendChild(creat);
    setTimeout(() => {
        creat.remove();
    }, 3000);
}

// Function to start the hearts interval
function startHearts() {
    if (!heartsInterval) { // Prevent multiple intervals
        heartsInterval = setInterval(hearts, 100);
    }
}

// Function to stop the hearts interval
function stopHearts() {
    if (heartsInterval) {
        clearInterval(heartsInterval);
        heartsInterval = null;
    }
}

// Function to toggle hearts based on the visible section
function toggleHearts() {
    const sectionA = document.querySelector('.a');
    const sectionB = document.querySelector('.b');

    const rectA = sectionA.getBoundingClientRect();
    const rectB = sectionB.getBoundingClientRect();

    if (rectA.top < window.innerHeight && rectA.bottom > 0) {
        startHearts(); // Start hearts if section .a is visible
    } else if (rectB.top < window.innerHeight && rectB.bottom > 0) {
        stopHearts(); // Stop hearts if section .b is visible
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', toggleHearts);

// Initial check on page load
toggleHearts();
