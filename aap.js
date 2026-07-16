const max = prompt("enter the max number");
console.log(max);

const randomNumber = Math.floor(Math.random() * max) + 1;
console.log(randomNumber);

let guess = prompt("guess the number");
while(true) {
    if (guess == "quit") {
        console.log("you quit the game");
        break;
    }
    if (guess == randomNumber) {
        console.log("you are correct! congratulations! ramdom number was " , random);
        break;
    } else if (guess < randomNumber) {
        console.log("too low! try again");
    } else {
        console.log("too high! try again");
    }
    guess = prompt("guess the number");
}