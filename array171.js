const readline = require('readline-sync');


let numberOfBabies = readline.questionInt('enter total number of babies : ');
let babiesWeight = [];
for(let i = 0; i < numberOfBabies; i++){
    babiesWeight[i]= readline.questionInt('Enter Weights ');
}
let sum = 0;
for(let i = 0; i < numberOfBabies; i++){
    sum += babiesWeight[i];
}
let meanWeight = sum / numberOfBabies;
console.log(meanWeight);
