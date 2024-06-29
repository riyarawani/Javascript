// const readline = require('readline-sync : ');

list1 = [80, 66, 94, 87, 99, 95]
let sum = 0;
for(let i = 0; i < list1.length; i++){
    sum += list1[i];
}
console.log(Math.floor(sum / list1.length));