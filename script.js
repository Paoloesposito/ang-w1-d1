function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getClosestNumber(target, number1, number2) {
    var diff1 = Math.abs(target - number1);
    var diff2 = Math.abs(target - number2);
    if (diff1 === diff2) {
        return 0; // In caso di pareggio, ritorna 0 per indicare che entrambi sono alla stessa distanza
    }
    else if (diff1 < diff2) {
        return number1;
    }
    else {
        return number2;
    }
}
function checkGuesses(player1Number, player2Number, targetNumber) {
    var player1Diff = Math.abs(targetNumber - player1Number);
    var player2Diff = Math.abs(targetNumber - player2Number);
    if (player1Diff === 0 && player2Diff === 0) {
        return "Entrambi i giocatori hanno indovinato il numero!";
    }
    else if (player1Diff === 0) {
        return "Il giocatore 1 ha indovinato il numero!";
    }
    else if (player2Diff === 0) {
        return "Il giocatore 2 ha indovinato il numero!";
    }
    else {
        var closest = getClosestNumber(targetNumber, player1Number, player2Number);
        if (closest === 0) {
            return "Entrambi i giocatori si sono avvicinati allo stesso modo al numero.";
        }
        else {
            return "Il giocatore ".concat(closest === player1Number ? 1 : 2, " si \u00E8 avvicinato di pi\u00F9 al numero.");
        }
    }
}
// Esempio di utilizzo
var targetNumber = randomBetween(1, 100);
var player1Number = randomBetween(1, 100);
var player2Number = randomBetween(1, 100);
console.log("Il numero casuale da indovinare \u00E8: ".concat(targetNumber));
console.log("Il giocatore 1 ha scelto: ".concat(player1Number));
console.log("Il giocatore 2 ha scelto: ".concat(player2Number));
var result = checkGuesses(player1Number, player2Number, targetNumber);
console.log(result);
