
let numeroSecreto = 7;
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt("Choose a number between 1 and 10");

if (numeroSecreto == chute) {
    break;

    
} else {
    if (numeroSecreto > chute ) {
        alert(`The secret number is bigger than  ${chute}`);
    } else {
        alert(`The secret number is smaller than  ${chute}`);
    }

    tentativas++;
}
}
if (tentativas > 1 ){
    alert(`You guessed the secret number correctly ${numeroSecreto} , with  ${tentativas} attempts `);
} else {
    alert(`You guessed the secret number correctly ${numeroSecreto} , with  ${tentativas} attempt `);
}




