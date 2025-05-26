
function repondre(correct) {
    const resultat = document.getElementById("resultat");
    if (correct) {
        resultat.textContent = "Bonne réponse !";
        resultat.style.color = "green";
    } else {
        resultat.textContent = "Mauvaise réponse, essayez encore.";
        resultat.style.color = "red";
    }
}
