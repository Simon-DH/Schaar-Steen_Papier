// Alle mogelijkheden die een speler of de computer legaal mag spelen
const mogelijkheden = ["schaar", "steen", "papier"];

// beginscore
let humanScore = 0;
let computerScore = 0;

// de computer moet ad-random elke keer iets kiezen: papier, schaar of steen
function computerPlay() {
    return mogelijkheden[Math.floor(Math.random()*mogelijkheden.length)];
}

// een spelronde
function playRound(playerSelection) {
    let computerSelection = computerPlay();
  
    // voorwaarde toegevoegd om te zien of er geen onzin meegegeven wordt
    if (!mogelijkheden.includes((playerSelection.trim()).toLowerCase())) {
        computerScore = ++computerScore;
        return(playerSelection + ' is onzin. Stop met me onzin te voeden!!! Als straf verlies je deze ronde.');
    }
    // als ze gelijk zijn is het een gelijkspel
    else if ((playerSelection.trim()).toLowerCase() === computerSelection) {
        return('De computer koos ook ' + (playerSelection.trim()).toLowerCase() + '. Het is een gelijkspel.');
    }

    // speler wint
    else if (
        ((playerSelection.trim()).toLowerCase() === 'schaar' && computerSelection === 'papier') ||
        ((playerSelection.trim()).toLowerCase() === 'steen' && computerSelection === 'schaar') ||
        ((playerSelection.trim()).toLowerCase() === 'papier' && computerSelection === 'steen')
        ) {
            humanScore = ++humanScore;
            return('De computer koos ' + computerSelection + '. Je wint deze ronde.');
        }

    // computer wint
    else {
        computerScore = ++computerScore;
        return('De computer koos ' + computerSelection + '. Je verliest deze ronde.');
    }
}


const rondeResultaat = document.querySelector('#rondeResultaat');
const spelerResultaat = document.querySelector('.playerscore');
const computerResultaat = document.querySelector('.computerscore');

// we gaan voor elke button luisteren, en een eventlistener opzetten. Per click krijgen we een ronde die gespeel dwordt in de console waar we de ID van de button als variabele meeegeven.
const buttons = document.querySelectorAll('.goedeInput');
buttons.forEach(
    (button) => {
        button.addEventListener('click', function() {
            const resultaat = document.createElement('p')
            resultaat.textContent = playRound(this.id);
            rondeResultaat.prepend(resultaat);
            toonScore();
        })
    }
)

// om onzin mee te kunnen geven
const onzinButton = document.querySelector('#onzin');
onzinButton.addEventListener('click', getInputValue);

function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementsByClassName('slechteInput');
    // speel een ronde, kan zelfs als je meerdere inputs zou hebben hebt
    for (i = 0; i < inputVal.length; i++) {
        const resultaat = document.createElement('p')
        resultaat.textContent = playRound(inputVal[0].value);
        rondeResultaat.prepend(resultaat);
        toonScore();
    }

}

// reset de waarde
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    let div = document.getElementById('rondeResultaat');
    while(div.firstChild){
    div.removeChild(div.firstChild);
    computerScore = 0;
    humanScore =0;
    toonScore();
    }
});

function toonScore() {
    spelerResultaat.textContent = humanScore;
    computerResultaat.textContent = computerScore;
}