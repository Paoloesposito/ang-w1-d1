function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getClosestNumber(target: number, number1: number, number2: number): number {
    const diff1 = Math.abs(target - number1);
    const diff2 = Math.abs(target - number2);
  
    if (diff1 === diff2) {
      return 0; // In caso di pareggio, ritorna 0 per indicare che entrambi sono alla stessa distanza
    } else if (diff1 < diff2) {
      return number1;
    } else {
      return number2;
    }
  }
  
  function checkGuesses(player1Number: number, player2Number: number, targetNumber: number): string {
    const player1Diff = Math.abs(targetNumber - player1Number);
    const player2Diff = Math.abs(targetNumber - player2Number);
  
    if (player1Diff === 0 && player2Diff === 0) {
      return "Entrambi i giocatori hanno indovinato il numero!";
    } else if (player1Diff === 0) {
      return "Il giocatore 1 ha indovinato il numero!";
    } else if (player2Diff === 0) {
      return "Il giocatore 2 ha indovinato il numero!";
    } else {
      const closest = getClosestNumber(targetNumber, player1Number, player2Number);
      if (closest === 0) {
        return "Entrambi i giocatori si sono avvicinati allo stesso modo al numero.";
      } else {
        return `Il giocatore ${closest === player1Number ? 1 : 2} si è avvicinato di più al numero.`;
      }
    }
  }
  
  // Esempio di utilizzo
  const targetNumber = randomBetween(1, 100);
  const player1Number = randomBetween(1, 100);
  const player2Number = randomBetween(1, 100);
  
  console.log(`Il numero casuale da indovinare è: ${targetNumber}`);
  console.log(`Il giocatore 1 ha scelto: ${player1Number}`);
  console.log(`Il giocatore 2 ha scelto: ${player2Number}`);
  
  const result = checkGuesses(player1Number, player2Number, targetNumber);
  console.log(result);
  