window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#000" : "#111";
});

// Funções para abrir e fechar modal
function abrirModal(tipo) {
  const modal = document.getElementById("modal" + tipo.charAt(0).toUpperCase() + tipo.slice(1));
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function fecharModal(tipo) {
  const modal = document.getElementById("modal" + tipo.charAt(0).toUpperCase() + tipo.slice(1));
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Funções para abrir e fechar modal de imagem
function abrirImagem(src, alt) {
  const modalImagem = document.getElementById("modalImagem");
  const imagemGrande = document.getElementById("imagemGrande");
  imagemGrande.src = src;
  imagemGrande.alt = alt;
  modalImagem.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharImagemModal() {
  const modalImagem = document.getElementById("modalImagem");
  modalImagem.style.display = "none";
  document.body.style.overflow = "auto";
}

// Funções para abrir e fechar modal de vídeo
function abrirVideo(num) {
  const modal = document.getElementById("modalVideo");
  const video = document.getElementById("videoGrande");
  const source = document.getElementById("videoGrandeSource");
  if (!modal || !video || !source) return;

  const src = num === 1 ? "images/video1.mp4" : "images/video2.mp4";
  source.src = src;
  video.load();
  video.play().catch(() => {});

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharVideoModal() {
  const modal = document.getElementById("modalVideo");
  const video = document.getElementById("videoGrande");
  if (!modal || !video) return;

  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Fechar modal de imagem clicando fora dela
document.addEventListener('click', function(event) {
  const modalImagem = document.getElementById("modalImagem");
  if (event.target === modalImagem) {
    fecharImagemModal();
  }

  const modalVideo = document.getElementById("modalVideo");
  if (event.target === modalVideo) {
    fecharVideoModal();
  }
});