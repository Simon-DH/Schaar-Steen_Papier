console.log("Hello, World! Dit is een spelletje Schaar Steen Papier in de console van je browser")

// Alle mogelijkheden die een speler of de computer legaal mag spelen

const mogelijkheden = ["schaar", "steen", "papier"];

// de computer moet ad-random elke keer iets kiezen: papier, schaar of steen
function computerPlay() {
    /* geef een mogelijkheid terug die de computer gekozen heeft uit de constante met alle mogelijkheden
    math.random() geeft een waarde tussen 0 en 1 - vermenigvuldigen we dit met de lengte van de array dan krijgen we een getaal tussen 0,00000003 en 2,99999
    (om te weten wat de lengte van de array is geven we dit door aan array.length - dit is beter dan er een drie te zetten, dan kunnen we makkelijk mogelijkheden toevoegen)
    math.floor gaat deze waarde naar beneden af ronden, dan krijgen we 0 1 of 2 terug
    dit is gelijk aan de indexen van de array
    we krijgen dan via return een willekeurige mogelijkheid terug */
    return mogelijkheden[Math.floor(Math.random()*mogelijkheden.length)];
}

// beginscore

let humanScore = 0;
let computerScore = 0;

// een spelronde
function playRound(playerSelection) {
    //de computerselectie in de ronde geplakt, zodat er maar één parameter moet meegegeven worden
    let computerSelection = computerPlay();
  
    // voorwaarde toegevoegd om te zien of er geen onzin meegegeven wordt
    if (!mogelijkheden.includes((playerSelection.trim()).toLowerCase())) {
        return(playerSelection + ' is onzin. Stop met me onzin te voeden!!! Als straf verlies je deze ronde.');
    }
    // als ze gelijk zijn is het een gelijkspel
    else if ((playerSelection.trim()).toLowerCase() === computerSelection) {
        return('De computer koos ook ' + (playerSelection.trim()).toLowerCase() + '.\nHet is een gelijkspel!');
    }
    // anders is het geen gelijkspel ;-)
    // wat als de speler wint
    else if (
        ((playerSelection.trim()).toLowerCase() === 'schaar' && computerSelection === 'papier') ||
        ((playerSelection.trim()).toLowerCase() === 'steen' && computerSelection === 'schaar') ||
        ((playerSelection.trim()).toLowerCase() === 'papier' && computerSelection === 'steen')
        ) {
            return('De computer koos ' + computerSelection + '.\nJe wint deze ronde.');
        }
    // wat als de speler verliest
    else {
        return('De computer koos ' + computerSelection + '.\nJe verliest deze ronde.');
    }
}



const rondeResultaat = document.querySelector('#rondeResultaat');

// we gaan voor elke button luisteren, en een eventlistener opzetten. Per click krijgen we een ronde die gespeel dwordt in de console waar we de ID van de button als variabele meeegeven.
const buttons = document.querySelectorAll('.goedeInput');
buttons.forEach(
    (button) => {
        button.addEventListener('click', function() {
            const resultaat = document.createElement('p')
            resultaat.textContent = playRound(this.id);
            rondeResultaat.prepend(resultaat);

        })
    }
)

// om onbzin mee te kunnen geven
const onzinButton = document.querySelector('#onzin');
onzinButton.addEventListener('click', getInputValue);

function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementsByClassName('slechteInput');
    // speel een ronde, kan zelfs als je meerdere elementen hebt
    for (i = 0; i < inputVal.length; i++) {
        const resultaat = document.createElement('p')
        resultaat.textContent = playRound(inputVal[0].value);
        rondeResultaat.prepend(resultaat);
    }

}

// reset de waarde
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    let div = document.getElementById('rondeResultaat');
    while(div.firstChild){
    div.removeChild(div.firstChild);
    }
});