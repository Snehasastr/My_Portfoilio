// Get the elements you want to interact with
const body = document.body;
const header = document.querySelector('header');

// Check if the user has a preference for dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// If the user prefers dark mode or has previously set it, enable dark mode
if (prefersDarkMode || localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode-header');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode-header');
    localStorage.removeItem('darkMode');
}

// Toggle dark mode when a button is clicked
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
