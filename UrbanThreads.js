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
  document.addEventListener("scroll", () => {
    const footerLine = document.getElementById("footerLine");
    const scrolled = window.scrollY > 50; // Detecta se o scroll é maior que 50px

    if (scrolled) {
        footerLine.classList.add("scrolled"); // Aumenta a largura da linha
    } else {
        footerLine.classList.remove("scrolled"); // Retorna ao estado inicial
    }
});


  // Adiciona um evento de clique para cada botão de tamanho
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe 'selected' de todos os botões
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Adiciona a classe 'selected' no botão clicado
    button.classList.add('selected');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.querySelector(".breadcrumb");

  if (!breadcrumbContainer) {
    console.error("Elemento .breadcrumb não encontrado!");
    return;
  }

  const pages = [
    { name: "Home", url: "homepage.html" },
    { name: "Collections", url: "Collections.html" },
    { name: "Campaigns", url: "campaigns.html" },
    { name: "Articles", url: "articles.html" },
    { name: "Urban Threads", url: "UrbanThreads.html" },
  ];

  // Verifica e atualiza o histórico no sessionStorage
  const currentPage = window.location.pathname.split("/").pop();
  let navigationHistory = JSON.parse(sessionStorage.getItem("navigationHistory")) || [];

  // Só adiciona ao histórico se não for igual à última página
  if (navigationHistory[navigationHistory.length - 1] !== currentPage) {
    navigationHistory.push(currentPage);
    sessionStorage.setItem("navigationHistory", JSON.stringify(navigationHistory));
  }

  // Obtém a página anterior (se existir)
  const previousPageUrl = navigationHistory.length > 1 ? navigationHistory[navigationHistory.length - 2] : null;
  const referrerPage = pages.find((page) => page.url === previousPageUrl);

  // Dados da página atual
  const currentPageData = pages.find((page) => page.url === currentPage);

  // Geração do breadcrumb
  const breadcrumbItems = [];

  if (referrerPage) {
    breadcrumbItems.push(`<a href="${referrerPage.url}">${referrerPage.name}</a>`);
  }

  if (currentPageData) {
    breadcrumbItems.push(`<span>${currentPageData.name}</span>`);
  } else {
    breadcrumbItems.push(`<span>Página Atual</span>`);
  }

  breadcrumbContainer.innerHTML = breadcrumbItems.join(" / ");
});