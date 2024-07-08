const containerCard = document.querySelector(".container-card-projeto");
const container = document.querySelector(".container");
const setaDireta = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");

function nextCard() {
  containerCard.scrollLeft += containerCard.clientWidth + 22;
}

function previousCard() {
  containerCard.scrollLeft -= containerCard.clientWidth + 22;
}

setaDireta.addEventListener("click", nextCard);
setaEsquerda.addEventListener("click", previousCard);
