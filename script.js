// 🌙 Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.style.setProperty('--bg-color', '#1e1e1e');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--card-bg', '#2c2c2c');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#f4f4f4');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--card-bg', '#fff');
  }
});

