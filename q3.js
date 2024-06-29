const readline = require('readline-sync');

let str = readline.question('Enter the message : ');
let start = readline.questionInt('Enter the start index : ');
let end = readline.questionInt('Enter the end index : ');

let finalOutput = "";
for (let i = 0; i < start; i++) {
    finalOutput += str[i];
}
for (let i = end; i >= start; i--) {
    finalOutput += str[i];
}
for (let i = end + 1; i < str.length; i++) {
    finalOutput += str[i];
}
console.log(finalOutput);
