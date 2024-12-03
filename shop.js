const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const searchIcon = document.getElementById('open-search-menu');
const searchInput = document.getElementById('search-input');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Open search bar
searchIcon.addEventListener('click', () => {
  menu.classList.add('active');
  searchInput.focus();
});