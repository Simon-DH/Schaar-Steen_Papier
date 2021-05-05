console.log("Hello, World! Dit is een spelletje Schaar Steen Papier in de console van je browser")

/* 3) Your game is going to play against the computer, 
so begin with a function called computerPlay 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */
// de computer moet ad-random elke keer iets kiezen: papier, schaar of steen
function computerPlay() {
    //Wat zijn de mogelijkheden
    let mogelijkheden = ["schaar", "steen", "papier"];
    // geef een mogelijkheid terug
    return mogelijkheden[Math.floor(Math.random()*3)];
}

/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - 
the playerSelection and computerSelection - 
and then return a string that declares the winner of the round
zorg dat case insensiteve ingegeven kan worden */

function playRound(playerSelection, computerSelection) {
    

}

// we vergelijken de uitkomst van de speler met die van de computer
// de winaar krijgt een punt
// Wie is de winnaar? 
// schaar wint van papier
// papier van steen
// steen van schaar
// We spelen 5 keer
// wie het meeste keer gewonnen heeft die is de uiteindelijke winaar

