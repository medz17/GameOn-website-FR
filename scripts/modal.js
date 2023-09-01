function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.getElementById("close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// écoute de l'événement click sur le bouton close
modalBtnClose.addEventListener("click", closeModal);
// fermeture de la modale
function closeModal() {
  modalbg.style.display = "none";
}

// ******** form *********
// ---- Récupérez les valeurs du formulaire ----
const form = document.getElementById("formInscription");

// ---- Ajoutez un gestionnaire d'événements "submit" ----
form.addEventListener("submit", function (event) {
  // Empêchez la soumission par défaut du formulaire
  event.preventDefault();

  // ---- Récupérez les valeurs des champs ----
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("birthdate").value;
  const gameOnParticipation = document.getElementById("quantity").value;
  const optionsRadio = document.getElementsByName("location");

  // ---- Effectuez des vérifications sur les champs ----
  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (firstName.trim() === "" || firstName.length < 2) {
    // trim efface espace début et fin de chaine
    alert("Le champ Prénom doit contenir au moins 2 caractères.");
    event.preventDefault();
  }

  // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  if (lastName.trim() === "" || lastName.length < 2) {
    alert("Le champ Nom doit contenir au moins 2 caractères.");
    event.preventDefault();
  }

  // (3) L'adresse électronique est valide.
  // Expression régulière pour valider une adresse électronique
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Vérif si l'adresse électronique est valide
  if (!regexEmail.test(email)) {
    alert("L'adresse électronique n'est pas valide.");
    event.preventDefault();
  }

  // (4) Pour le nombre de concours, une valeur numérique est saisie.
  // Expression régulière pour valider une valeur numérique
  const regexNumerique = /^\d+$/;
  // Vérif si la valeur est numérique
  if (!regexNumerique.test(gameOnParticipation)) {
    alert("Veuillez saisir une valeur numérique valide.");
    event.preventDefault();
  }

  // (5) Un bouton radio est sélectionné.
  for (let i = 0; i < optionsRadio.length; i++) {
    if (optionsRadio[i].checked) {
      radioSelected = optionsRadio.value;
      console.log(radioSelected);
      break;
    }
  }
  // Si aucune option n'est cochée, affichage message d'erreur
  if (!radioSelected) {
    alert("Veuillez sélectionner une option.");
    event.preventDefault();
  }
  // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  // Obtenez l'état de la case à cocher
  const conditionsChecked = document.getElementById("checkbox1").checked;
  // Vérifiez si la case des conditions générales est cochée
  if (!conditionsChecked) {
    alert("Veuillez accepter les conditions générales pour continuer.");
    event.preventDefault();
  }

  // ---- Vérif si tous les champs sont remplis ----
  if (
    firstName === "" &&
    lastName === "" &&
    email === "" &&
    dateOfBirth === "" &&
    gameOnParticipation === "" &&
    optionsRadio === false &&
    conditionsChecked === false
  ) {
    console.log(firstName);
    alert("Veuillez remplir tous les champs.");
    event.preventDefault();
  } else {
    // Si tous les champs sont remplis, soumettez le formulaire
    // form.submit();
    console.log(form);
    // Si la validation réussit, le formulaire sera soumis normalement
    alert("Formulaire soumis avec succès !");
  }
});
