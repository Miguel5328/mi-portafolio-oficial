const elements = document.querySelectorAll(".anim");

function mostrar() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", mostrar);
mostrar();

function abrirImagen(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("imgGrande").src = img.src;
}

function cerrarImagen() {
  document.getElementById("modal").style.display = "none";
}