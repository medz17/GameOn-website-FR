/********************************
 *** ouverture fermeture form ***
 ********************************/
// DOM Elements hero section
const modalhero = document.querySelector(".hero-section");
// DOM Elements form
const modalbg = document.querySelector(".bground");
const modalCopy = document.querySelector(".copyrights");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.getElementById("close");
const modalTopnav = document.getElementById("myTopnav");

//  ----- ouverture formulaire -----
// écoute de l'événement click sur le bouton Je M'inscris
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// ouverture de la modale form
function launchModal() {
  modalbg.style.display = "block";
  modalhero.style.display = "none";
  modalCopy.style.display = "none";
  if (window.innerWidth <= 768) {
    modalTopnav.style.display = "block";
  } else {
    modalTopnav.style.display = "none";
  }
}
// fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.addEventListener("load", launchModal);
window.addEventListener("resize", launchModal);

//  ----- fermeture formulaire -----
// écoute de l'événement click sur le bouton close
modalBtnClose.addEventListener("click", closeModal);
// fermeture de la modale form
function closeModal() {
  modalbg.style.display = "none";
  modalCopy.style.display = "block";
  modalTopnav.style.display = "block";
  if (window.innerWidth <= 800) {
    modalhero.style.display = "block";
  } else {
    modalhero.style.display = "grid";
  }
}
// fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.addEventListener("load", closeModal);
window.addEventListener("resize", closeModal);
