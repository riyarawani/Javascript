const readline = require('readline-sync');


let binaryStr = readline.question('Enter the binary string: ');

let maxCount = 0;
let currentCount = 0;

for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
        currentCount++;
      
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    } else {
        currentCount = 0;
    }
}
console.log(maxCount);
