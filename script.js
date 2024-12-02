const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const searchIcon = document.getElementById('open-search-menu');
const searchInput = document.getElementById('search-input');

// Abre o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Abre o menu e foca na barra de pesquisa ao clicar na lupa
searchIcon.addEventListener('click', () => {
  menu.classList.add('active');
  searchInput.focus(); // Foca na barra de pesquisa
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
  
