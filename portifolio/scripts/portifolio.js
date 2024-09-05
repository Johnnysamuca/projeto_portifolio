const containerCard = document.querySelector(".container-card-projeto");
const container = document.querySelector(".container");
const setaDireta = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");
const menuIcone = document.querySelector(".icone-menu");
const menuLateral = document.querySelector(".menu-lateral");
const contato = document.querySelector(".contato");

function nextCard() {
  if (document.documentElement.clientWidth > 767) {
    containerCard.scrollLeft += containerCard.clientWidth + 16;
  } else {
    containerCard.scrollLeft += containerCard.clientWidth;
  }
}

function previousCard() {
  if (document.documentElement.clientWidth > 767) {
    containerCard.scrollLeft -= containerCard.clientWidth + 16;
  } else {
    containerCard.scrollLeft -= containerCard.clientWidth;
  }
}

function openMenu() {
  if (!menuLateral.classList.contains("aberto")) {
    menuLateral.classList.add("aberto");
  } else {
    menuLateral.classList.remove("aberto");
  }
}

function copyEmail(e) {
  e.preventDefault();
  const email = "johnnysamuel486@gmail.com";
  navigator.clipboard.writeText(email);
}

menuIcone.addEventListener("click", openMenu);
setaDireta.addEventListener("click", nextCard);
setaEsquerda.addEventListener("click", previousCard);
contato.addEventListener("click", copyEmail);
