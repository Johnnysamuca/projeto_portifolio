const containerCard = document.querySelector(".container-card-projeto");
const container = document.querySelector(".container");
const setaDireta = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");
const menuIcone = document.querySelector(".icone-menu");
const menuLateral = document.querySelector(".menu-lateral");
const contato = document.querySelector(".contato");
const contatoMobile = document.querySelector(".contatoMobile");
const sobre = document.querySelector(".item-lista--sobre");
const sobreMobile = document.querySelector(".item-lista--sobreMobile");
const abaSuspenca = document.querySelector(".aba-suspenca");
const img = document.querySelector(".img");

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

function copyEmailAndOpenTabSuspend(e) {
  e.preventDefault();
  const email = "johnnysamuel486@gmail.com";
  navigator.clipboard.writeText(email);
  abaSuspenca.classList.add("aberta");

  setTimeout(() => {
    abaSuspenca.classList.remove("aberta");
  }, "2000");
}

function aboutScrolling() {
  const sectionSobre = document.querySelector(".sobre"); // Verifique o nome da classe

  if (sectionSobre) {
    const sobrePosition = sectionSobre.offsetTop;

    window.scrollTo({
      top: sobrePosition,
      behavior: "smooth",
    });
  } else {
    console.error("Elemento '.sobre' não encontrado!");
  }
}

const imagem1 = "../assets/imagem-1.jpg";
const imagem2 = "../assets/imagem-2.jpg";
const imagem3 = "../assets/imagem-3.jpg";

let controle = 1;

function changeImage() {
  const imagens = [imagem1, imagem2, imagem3];

  if (controle < imagens.length) {
    img.setAttribute("src", imagens[controle]);
    controle++;
  } else {
    controle = 0;
  }
}

setInterval(changeImage, 3000);

window.sr = ScrollReveal({ reset: true });
sr.reveal(".headline", { duration: 2500 });

menuIcone.addEventListener("click", openMenu);
setaDireta.addEventListener("click", nextCard);
setaEsquerda.addEventListener("click", previousCard);
contato.addEventListener("click", copyEmailAndOpenTabSuspend);
contatoMobile.addEventListener("click", copyEmailAndOpenTabSuspend);
sobre.addEventListener("click", aboutScrolling);
sobreMobile.addEventListener("click", aboutScrolling);
