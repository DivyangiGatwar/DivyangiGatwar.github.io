// Theme toggle logic
const btn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
btn.textContent = currentTheme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode';

btn.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  btn.textContent = newTheme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode';
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();
