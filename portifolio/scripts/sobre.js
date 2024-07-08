const img = document.getElementById("img");

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
