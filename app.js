
alert("Welcome to the Game ");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
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
let palavraTentativa = tentativas > 1 ? `attempts`: `attempt`;
alert(`You guessed the secret number correctly ${numeroSecreto} , with  ${tentativas} ${palavraTentativa} `);


