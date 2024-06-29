let readline = require('readline-sync');

let length1 = readline.questionInt('enter the size of an arr1 : ');
arr1 = [];
for(let i=0; i<length1; i++){
    let a = readline.questionInt('enter an element : ');
    arr1[i]=a
}
let length2 = readline.questionInt('enter the size of an arr2 : ');
arr2 = [];
for(let j=0; j<length2; j++){
    let b = readline.questionInt('enter an element : ');
    arr2[j] = b
}
let sum = 0 ;
for(let i=0; i<arr1.length; i++){
    for(let j = 0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            sum += arr1[i];
        }
    }
}
console.log(sum);
