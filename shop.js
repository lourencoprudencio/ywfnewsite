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
// Detecta o scroll na página e ajusta o título
document.addEventListener("scroll", () => {
  const title = document.querySelector("main h1");
  const scrolled = window.scrollY > 50; // Detecta se houve scroll maior que 50px
  if (scrolled) {
    title.classList.add("scrolled");
  } else {
    title.classList.remove("scrolled");
  }
});