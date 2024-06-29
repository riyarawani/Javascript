const readlinesync = require('readline-sync');

let num = readlinesync.questionInt('Enter number ');
let result = 0;
for(let i = 1; i <=  num; i++){
    result += num
}
console.log(result);

