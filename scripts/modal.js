/***********************************
 *** responsive barre navigation ***
 ***********************************/
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

/*************************
 ********* form **********
 *************************/
// DOM Elements form
const form = document.getElementById("formInscription");

// ---- Ajout un gestionnaire d'événements "submit" ----
form.addEventListener("submit", function (event) {
  // Empêcher la soumission par défaut du formulaire
  event.preventDefault();

  // ---- DOM Elements champs form ----
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("birthdate").value;
  const gameOnParticipation = document.getElementById("quantity").value;
  const optionsRadio = document.getElementsByName("location");

  // ---- Effectuer des vérifications sur les champs ----
  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (firstName.trim() === "" || firstName.length < 2) {
    // trim efface espace début et fin de chaine
    const firstError = document.getElementById("firstError");
    // Affichage message d'erreur
    firstError.textContent =
      "Le champ Prénom doit contenir au moins 2 caractères.";
    firstError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation du message d'erreur
    firstError.textContent = "";
    firstError.style.display = "none";
  }

  // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  if (lastName.trim() === "" || lastName.length < 2) {
    const lastError = document.getElementById("lastError");
    // Affichage un message d'erreur
    lastError.textContent = "Le champ Nom doit contenir au moins 2 caractères.";
    lastError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation le message d'erreur
    lastError.textContent = "";
    lastError.style.display = "none";
  }

  // (3) L'adresse électronique est valide.
  // Expression régulière pour valider une adresse électronique
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Vérif si l'adresse électronique est valide
  if (!regexEmail.test(email)) {
    const emailError = document.getElementById("emailError");
    // Affichage message d'erreur
    emailError.textContent = "L'adresse électronique n'est pas valide.";
    emailError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation le message d'erreur
    emailError.textContent = "";
    emailError.style.display = "none";
  }

  // (3-4) Vérification si la date de naissance est vide ou non
  if (dateOfBirth === "") {
    const birthdateError = document.getElementById("birthdateError");
    // Affichage du message d'erreur
    birthdateError.textContent = "Veuillez entrer votre date de naissance.";
    birthdateError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation du message d'erreur
    birthdateError.textContent = "";
    birthdateError.style.display = "none";
  }

  // (4) Pour le nombre de concours, une valeur numérique est saisie.
  // Expression régulière pour valider une valeur numérique
  const regexNumerique = /^\d+$/;
  // Vérif si la valeur est numérique
  if (!regexNumerique.test(gameOnParticipation)) {
    const quantityError = document.getElementById("quantityError");
    // Affichage du message d'erreur
    quantityError.textContent = "Veuillez saisir un nombre de participation.";
    quantityError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation du message d'erreur
    quantityError.textContent = "";
    quantityError.style.display = "none";
  }

  // (5) Un bouton radio est sélectionné.
  let radioSelected = false;
  for (let i = 0; i < optionsRadio.length; i++) {
    if (optionsRadio[i].checked) {
      radioSelected = true;
      break;
    }
  }
  // Si aucune option n'est cochée, affichage message d'erreur
  if (!radioSelected) {
    const choiceError = document.getElementById("choiceError");
    // Affichage du message d'erreur
    choiceError.textContent = "Veuillez sélectionner une option.";
    choiceError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation du message d'erreur
    choiceError.textContent = "";
    choiceError.style.display = "none";
  }
  // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  // Récupération de l'état de la case à cocher
  const conditionsChecked = document.getElementById("checkbox1").checked;
  // Vérification si la case des conditions générales est cochée
  if (!conditionsChecked) {
    const conditionsError = document.getElementById("conditionsError");
    // Affichage du message d'erreur
    conditionsError.textContent =
      "Veuillez accepter les conditions générales pour continuer.";
    conditionsError.style.display = "block";
    event.preventDefault();
  } else {
    // Réinitialisation du message d'erreur
    conditionsError.textContent = "";
    conditionsError.style.display = "none";
  }

  //  création de la variable choix radio
  const choice = document.querySelector('input[name="location"]:checked');
  // DOM Elements validation mess
  const messageValidation = document.querySelector(".validationMess");
  // ---- Vérif si au moins un champ vide ----
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    dateOfBirth === "" ||
    gameOnParticipation === "" ||
    !choice ||
    !conditionsChecked
  ) {
    //----- message d'erreur -----
    const messageError = document.getElementById("messageError");
    // Affichage du message d'erreur
    messageError.style.display = "block";
    event.preventDefault();
  } else {
    //---- message de validation -----
    // const modalBtnCloseMess = document.getElementById("closeMess");
    messageValidation.style.display = "block";
    modalbg.style.display = "none";
  }
  // croix fermeture validation message
  const cocheCloseValidationMess = document.getElementById("closeMess");
  // écoute de l'événement click sur le bouton close
  cocheCloseValidationMess.addEventListener("click", closeMess);
  // fermeture de la modale form
  function closeMess() {
    messageValidation.style.display = "none";
    modalTopnav.style.display = "block";
    modalCopy.style.display = "block";
    if (window.innerWidth <= 800) {
      modalhero.style.display = "block";
    } else {
      modalhero.style.display = "grid";
    }
  }
  // fonction au chargement de la page et lors du redimensionnement de la fenêtre
  window.addEventListener("load", closeMess);
  window.addEventListener("resize", closeMess);

  const btnCloseValidationMess = document.getElementById("closeMessBtn");
  // écoute de l'événement click sur le bouton close
  btnCloseValidationMess.addEventListener("click", closeMessBtn);
  // fermeture de la modale form
  function closeMessBtn() {
    messageValidation.style.display = "none";
    modalTopnav.style.display = "block";
    modalCopy.style.display = "block";
    if (window.innerWidth <= 800) {
      modalhero.style.display = "block";
    } else {
      modalhero.style.display = "grid";
    }
  }
  // fonction au chargement de la page et lors du redimensionnement de la fenêtre
  window.addEventListener("load", closeMessBtn);
  window.addEventListener("resize", closeMessBtn);
});
