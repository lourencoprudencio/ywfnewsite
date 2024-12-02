const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const searchIcon = document.getElementById('open-search-menu');
const searchInput = document.getElementById('search-input');
const sizeButtons = document.querySelectorAll('.size-button');

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
  function changeImage(image) {
    document.getElementById('main-product-image').src = image;
  }
  // Adiciona um evento de clique para cada botão de tamanho
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe 'selected' de todos os botões
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Adiciona a classe 'selected' no botão clicado
    button.classList.add('selected');
  });
});
