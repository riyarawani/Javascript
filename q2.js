
const readline = require('readline-sync');

let n = readline.questionInt('Enter the size of the array: ');
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = readline.questionInt(`Enter element`);
}

let count = 0;
for (let i = 0; i < n; i++) {
    let flag = 1;
    for (let j = 0; j < n-1; j++) {
        if (arr[i] == arr[j]) {
            flag = 0;
            // break;
        }
    }
    if (flag === 1) {
        count += 1;
    }
}
console.log(count);
