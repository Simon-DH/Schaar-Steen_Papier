console.log("Hello, World! Dit is een spelletje Schaar Steen Papier in de console van je browser")

// de computer moet ad-random elke keer iets kiezen: papier, schaar of steen
function computerPlay() {
    //Wat zijn de mogelijkheden
    let mogelijkheden = ["schaar", "steen", "papier"];
    // geef een mogelijkheid terug
    return mogelijkheden[Math.floor(Math.random()*3)];
}



// we vergelijken de uitkomst van de speler met die van de computer
// de winaar krijgt een punt
// Wie is de winnaar? 
// schaar wint van papier
// papier van steen
// steen van schaar
// We spelen 5 keer
// wie het meeste keer gewonnen heeft die is de uiteindelijke winaar

