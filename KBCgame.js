const readlineSync = require('readline-sync');

console.log("*****************WELCOME TO KAUN BANEGA CROREPATI********************");

console.log("Question 1: What is the capital of India?");
console.log("A. Mumbai  \n B. Delhi  \n C. Kolkata  \n D. Chennai" );
let answer1 = readlineSync.question("Your answer: ");
if(answer1 == "B"){
    console.log("Correct! You've won Rs. 500.");

    console.log("Question 2: Who is the Prime Minister of India?");
    console.log("A. Narendra Modi  \n B. Rahul Gandhi  \n C. Manmohan Singh \n D. Arvind Kejriwal" );
    let answer2 = readlineSync.question("Your answer: ");
    if(answer2 == "A"){
        console.log("Correct! You've won Rs. 1000.");

        console.log("Question 3: What is the National bird of India?");
        console.log("A. Peacock  \n B. Parrot  \n C. Cocktail  \n D. Eagle" );
        let answer3 = readlineSync.question("Your answer: ");
        if(answer3 === "A"){
            console.log("Correct! You've won Rs. 2000.");
        }else{
            console.log("Wrong answer! You looses the game.");
        }
    }else{
        console.log("Wrong answer! You looses the game.");
    }

}else{
    console.log("Wrong answer! You looses the game.");
}
console.log("Congratulations! You've won Rs. 2000. Play again to win more.");
