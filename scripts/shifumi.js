const btnjeu = document.querySelectorAll('.btnj');
const winCondtion = document.getElementById('win');
const loseCondtion = document.getElementById('lose');
const drawCondtion = document.getElementById('draw');
const resultDisplay = document.getElementById('result-display');

const choice = ['Pierre', 'Papier', 'Ciseaux'];
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
        updateScore();
        resultDisplay.innerHTML = `J'ai joué : ${player}<br>Le robot a joué : ${robot}<br>C'est une <strong>${result === 'draw' ? 'égalité' : result === 'win' ? 'victoire' : 'défaite'}</strong>`;
    })
})

function updateScore() {
    winCondtion.textContent = score.win;
    loseCondtion.textContent = score.lose;
    drawCondtion.textContent = score.draw;
}
