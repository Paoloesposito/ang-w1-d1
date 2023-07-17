function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getAbsoluteDifference(num1: number, num2: number): number {
    return Math.abs(num1 - num2);
  }
  
  function playGame(): void {
    const player1NumberInput = document.getElementById('player1') as HTMLInputElement;
    const player2NumberInput = document.getElementById('player2') as HTMLInputElement;
    const resultElement = document.getElementById('result');
  
    if (!player1NumberInput || !player2NumberInput || !resultElement) {
      return;
    }
  
    const player1Number = parseInt(player1NumberInput.value);
    const player2Number = parseInt(player2NumberInput.value);
  
    if (isNaN(player1Number) || isNaN(player2Number)) {
      resultElement.textContent = 'Inserire solo numeri validi.';
      return;
    }
  
    const minRandomNumber = 1;
    const maxRandomNumber = 100;
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  
    const player1Difference = getAbsoluteDifference(player1Number, randomNumber);
    const player2Difference = getAbsoluteDifference(player2Number, randomNumber);
  
    resultElement.innerHTML = `Il numero casuale era: ${randomNumber}.<br/>`;
  
    if (player1Number === randomNumber && player2Number === randomNumber) {
      resultElement.innerHTML += 'Entrambi i giocatori hanno indovinato il numero! Pareggio!';
    } else if (player1Number === randomNumber) {
      resultElement.innerHTML += 'Giocatore 1 ha vinto! Congratulazioni!';
    } else if (player2Number === randomNumber) {
      resultElement.innerHTML += 'Giocatore 2 ha vinto! Congratulazioni!';
    } else {
      if (player1Difference === player2Difference) {
        resultElement.innerHTML += 'Entrambi i giocatori si sono avvicinati allo stesso modo.';
      } else if (player1Difference < player2Difference) {
        resultElement.innerHTML += 'Giocatore 1 si è avvicinato di più al numero.';
      } else {
        resultElement.innerHTML += 'Giocatore 2 si è avvicinato di più al numero.';
      }
    }
  }
  