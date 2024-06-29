let readline = require('readline-sync');

let positiveInteger = readline.questionInt('enter  positiveInteger: ');
let sum = 0;
for(let i = 0 ; i< positiveInteger ; i++){
    if(positiveInteger % i == 0){
        sum += i
    }
}
if(sum == positiveInteger){
    console.log(" perfect");
}
else{
    console.log(' Not perfect')
}