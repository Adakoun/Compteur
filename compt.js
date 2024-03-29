let compteur = 0;
let pas = 1;

const btn_incrementer = document.getElementById("btn-incrementer");
const texte1 = document.getElementById("texte1");
const btn_decrementer = document.querySelector("#btn-decrementer");
const btn_ajouter = document.getElementById("btn-ajouter");
console.log(texte1);
texte1.innerHTML = compteur;
/*function charge()
    {
        texte1.innerText ="Chargé"
    }
    charge()
    setTimeout(charg
    e,5000)*/
function incrementer() {
  compteur += pas;
  // compteur += parseInt(document.getElementById("nombre").value);
  texte1.innerHTML = compteur;
  // console.log(compteur);
}
function decrementer() {
  compteur -= pas;
  texte1.innerHTML = compteur;
  // console.log(compteur);
}
function updatePas() {
  const valeurNombre = parseInt(document.getElementById("nombre").value);

  if (!isNaN(valeurNombre) && valeurNombre > 0) {
    pas = valeurNombre; //
  } else {
    alert("Veuillez saisir un nombre valide et supérieur à zéro.");
  }
}

btn_incrementer.addEventListener("click", incrementer);
btn_decrementer.addEventListener("click", decrementer);
btn_ajouter.addEventListener("click", function () {
  // let nombre = parseInt(document.getElementById("nombre").value);
  updatePas();
  texte1.innerHTML = compteur;
  // console.log(nombre);
});
