
const readlineSync = require('readline-sync');


// ELSE
// let n = readlineSync.questionInt('Enter a Number : ');
// for(let i = 0; i<n; i++){
//     let num = readlineSync.questionInt('enter Num : ');
// }
// question 1
// let a = readlineSync.questionInt('Enter a Number : ');
// let b = readlineSync.questionInt('Enter a Number : ');
// let max = a ;
// if(max<b){
//     max = b;
// }
// else{
//     max = a;
// }
// console.log(max);

// question 2
// let n = readlineSync.questionInt('Enter a number : ');
// if(n%2==0){
//     console.log("Even");
// }
// else{
//     console.log('odd')
// }

// question 3   frequency  doubt
// let a = readlineSync.questionInt('Enter a number : ');
// let b = readlineSync.questionInt('Enter a number : ');
// let c = readlineSync.questionInt('Enter a number : ');
// let d = readlineSync.questionInt('Enter a number : ');
// let e = readlineSync.questionInt('Enter a number : ');
// let count = 0;
// if(a==b){
//     count++
// }
//  if(a==c){
//     count++
// }
// if(a==d){
//     count++
// }
// if(a==e){
//     count++
// }
// else if(b==c){
//     count++
// }
// if(b==d){
//     count++
// }
// if(b==e){
//     count++
// }
// if(c==d){
//     count++
// }
// if(c==e){
//     count++
// }
// if(d==e){
//     count++
// }
//     console.log('b' , count);



// let a = readlineSync.questionInt('Enter Number : ') ;
// let b = readlineSync.questionInt('Enter Number : ') ;
// let c = readlineSync.questionInt('Enter Number : ') ;
// let max = a;
// if(max < b){
//     max = b;
// }
// if(max < c){
//     max = c;
// }
//     console.log(max);


// practice question..........11th april

let M = readlineSync.questionInt('Enter M : ');
let N = readlineSync.questionInt('Enter N: ');
let sum = 0;
for(let i = M;  i<N;  i++){
    sum += i;
}
console.log(sum);
