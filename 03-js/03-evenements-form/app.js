let form = document.querySelector("#monFormulaire");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let nom = form.querySelector("#nom");
  let prenom = form.querySelector("#prenom");
  let dataIsValid = false;

  if (nom.value != "") {
    nom.style.borderColor = "";
  } else {
    nom.style.borderColor = "red";
  }

  if (prenom.value != "") {
    prenom.style.borderColor = "";
  } else {
    prenom.style.borderColor = "red";
  }

  if (nom.value != "" && prenom.value != "") {
    dataIsValid = true;
  }

  if (dataIsValid) {
    let formData = new FormData(event.target);
    console.log("Nom: " + formData.get("nom"));
    console.log("Prénom: " + formData.get("prenom"));
    event.target.submit();
  }
});
