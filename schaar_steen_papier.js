console.log("Hello, World! Dit is een spelletje Schaar Steen Papier in de console van je browser")

/* 3) Your game is going to play against the computer, 
so begin with a function called computerPlay 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */

// de mogelijkheden zetten we als een constante vast in een array - wat een fancy woord voor een soort lijst is

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

/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - 
the playerSelection and computerSelection - 
and then return a string that declares the winner of the round
zorg dat case insensiteve ingegeven kan worden */

function playRound(playerSelection, computerSelection) {
    // voorwaarde toegevoegd om te zien of er geen onzin meegegeven wordt
    if (!mogelijkheden.includes((playerSelection.trim()).toLowerCase())) {
        return('Stop met me onzin te voeden!!!')
    }
    // als ze gelijk zijn is het een gelijkspel
    else if ((playerSelection.trim()).toLowerCase() === computerSelection) {
        return('De computer koos ook ' + (playerSelection.trim()).toLowerCase() + '.\nHet is een gelijkspel!');
    }
    // anders is het geen gelijkspel ;-)
    // wat als de speler schaar koos
    else if ((playerSelection.trim()).toLowerCase() === 'schaar') {
        // de computer wint als hij steen koos
        if (computerSelection === 'steen') {
            return('De computer koos ' + computerSelection + '.\nHij slaagt met genoegen en met de steen je schaar kapot.\nJe verliest deze ronde!');
        }
        // de computer verliest als hij papier koos
        else {
            return('De computer koos ' + computerSelection + '.\nMet je schaar knip je zijn belachelijk papiertje door.\nJe wint deze ronde!');
        }
    }
    // wat als de speler steen koos
    else if ((playerSelection.trim()).toLowerCase() === 'steen') {
        // de computer wint als hij papier koos
        if (computerSelection === 'papier') {
            return('De computer koos ' + computerSelection + '.\nHij wikkelt je belachelijk steentje in zijn papier.\nJe verliest deze ronde!');
        }
        // de computer verliest als schaar koos
        else {
            return('De computer koos ' + computerSelection + '.\nJe gooit je rotsblok op zijn nagelschaartje.\nJe wint deze ronde!');
        }
    }
    // anders heeft de speler papier gekozen
    else {
        // de computer wint als hij schaar koos
        if (computerSelection === 'schaar') {
            return('De computer koos ' + computerSelection + '.\nJe papiertje wordt versnipperd door de gouden schaar van de computer.\nJe verliest deze ronde!');
        }
        // de computer verliest als steen koos
        else {
            return('De computer koos ' + computerSelection + '.\nJe maakt een mooi geschenk van zijn steen door het in je cadeaupapier te verpakken.\nJe wint deze ronde!');
        }
    }
}

let playerSelection = prompt("Schaar, Steen of Papier. Wat is je wapen?");
let computerSelection = computerPlay();

console.log(computerSelection)

alert(playRound(playerSelection, computerSelection));



