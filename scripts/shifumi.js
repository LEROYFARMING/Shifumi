let btnjeu = document.querySelectorAll('.btnj');
console.log(btnjeu) // vérification de la sélection des boutons
const choice = ["Pierre", "Papier", "Ciseaux"];


btnjeu.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const Player = bouton.textContent;
        const Robot = choice(Math.floor(Math.random()*3));
        let result;
        if(Player === Robot) {
            result = "Draw";
        } else if("Ciseaux" === "Papier"
            && "Pierre" === "Ciseaux"
            && "Papier" === "Pierre") {

        }
    })
})

