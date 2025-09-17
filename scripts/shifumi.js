let btnjeu = document.querySelectorAll('.btnj');
console.log(btnjeu) // vérification de la sélection des boutons
const choice = ['Pierre', 'Papier', 'Ciseaux'];
const condition = ['Win', 'Lose', 'Draw'];
const score = {win:0, lose: 0, draw:0};


btnjeu.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const player = bouton.textContent;
        const robot = choice(Math.floor(Math.random()*3));
        let result;
        if(player === robot) {
            result = 'draw';
        } else if(player === 'Ciseaux' && robot === 'Papier'
            || player === 'Pierre' && robot === 'Ciseaux'
            || player === 'Papier' && robot === 'Pierre') {
                result = 'win';
        }
        else {
            result = 'lose';
        }
        score[result]++;
    })
})

