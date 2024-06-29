const readlineSync = require('readline-sync');


let a = readlineSync.questionInt('Enter number : ');
let b = readlineSync.questionInt('Enter number : ');
let c = readlineSync.questionInt('Enter number : ');
if (a == b && b == c) {
    console.log("All equal");
}
else if (a == b || b == c || c == a) {
    console.log('two equal');
}
else {
    let max = a;
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c;
    }
    if (max % 2 == 0) {
        console.log('largestEven');
    }
    else {
        console.log('largestOdd');
    }
}










