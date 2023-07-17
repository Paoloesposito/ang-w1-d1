function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getAbsoluteDifference(num1, num2) {
    return Math.abs(num1 - num2);
}
function playGame() {
    var player1NumberInput = document.getElementById('player1');
    var player2NumberInput = document.getElementById('player2');
    var resultElement = document.getElementById('result');
    if (!player1NumberInput || !player2NumberInput || !resultElement) {
        return;
    }
    var player1Number = parseInt(player1NumberInput.value);
    var player2Number = parseInt(player2NumberInput.value);
    if (isNaN(player1Number) || isNaN(player2Number)) {
        resultElement.textContent = 'Inserire solo numeri validi.';
        return;
    }
    var minRandomNumber = 1;
    var maxRandomNumber = 100;
    var randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    var player1Difference = getAbsoluteDifference(player1Number, randomNumber);
    var player2Difference = getAbsoluteDifference(player2Number, randomNumber);
    resultElement.innerHTML = "Il numero casuale era: ".concat(randomNumber, ".<br/>");
    if (player1Number === randomNumber && player2Number === randomNumber) {
        resultElement.innerHTML += 'Entrambi i giocatori hanno indovinato il numero! Pareggio!';
    }
    else if (player1Number === randomNumber) {
        resultElement.innerHTML += 'Giocatore 1 ha vinto! Congratulazioni!';
    }
    else if (player2Number === randomNumber) {
        resultElement.innerHTML += 'Giocatore 2 ha vinto! Congratulazioni!';
    }
    else {
        if (player1Difference === player2Difference) {
            resultElement.innerHTML += 'Entrambi i giocatori si sono avvicinati allo stesso modo.';
        }
        else if (player1Difference < player2Difference) {
            resultElement.innerHTML += 'Giocatore 1 si è avvicinato di più al numero.';
        }
        else {
            resultElement.innerHTML += 'Giocatore 2 si è avvicinato di più al numero.';
        }
    }
}
