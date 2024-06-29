const readline =require('readline-sync') 

function evenSum(){
let n = readline.questionInt('Enter arraySize : ');
let arr = [];
for(let i = 0; i<n; i++){
    arr[i] = readline.questionInt('Enter Elements : ');
}
let sum = 0;
for(let i = 0; i<n; i++){
    if(arr[i] % 2 == 0){
        sum += arr[i]
    }
}
console.log(sum);
}

evenSum();