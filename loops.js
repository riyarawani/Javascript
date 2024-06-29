const readlineSync = require('readline-sync');

// old database questions
// question 145

// // question 144
// let num = readlineSync.questionInt('enter number ');
// let num1 = num;
// let count = 0;
// let revNum = 0;
// for(let i = 0; i <= num; i++){
//     if(num % i == 0){
//         count += 1;
//     }
// }
// if(count === 2){
//     while(num > 0 ){
//         rem = num % 10 ; 
//         revNum *= 10 + rem ; 
//         num = Math.floor(num / 10);
//     }
//     let originalNum = revNum;
//     for(let j = 0; j <= originalNum ; j++){
//         if(originalNum % j == 0){
//             count += 1;
//         }
//     }
//     if(num1 === originalNum){
//         console.log("Twisted Prime Number");
//     }
//     else{
//         console.log(" Not a twisted prime Number");
//     }
// }
// else{
//     console.log(" Not a twisted prime Number");
// }


// question 144



//Meraki//

//ques1 //
// let num = readlineSync.questionInt("enter a number : ");
// for(let i = 0 ; i <= num ; i++){
//     console.log(i);
// }


//ques2//
// let num = readlineSync.questionInt("enter a number : ");
// for(let i = 1 ; i <= num ; i++){
//     if(i % 7 == 0){
//         console.log(i);
//     }
// }


//ques3//
// let num = readlineSync.questionInt("enter a number : ");
// let sum = 0;
// for(let i = 0 ; i <= num ; i++){
//     sum += i;
// }
// console.log(sum);


//ques4//
// let num = readlineSync.questionInt("enter a number : ");
// let sum = 0 ;
// for(let i = 1 ; i <= num ; i++){
//     let number = readlineSync.questionInt("enter a number : ");
//     sum += number ;
// }
// console.log(sum);


//ques5//
// let num = readlineSync.questionInt("enter a number ");
// for(let i = 1 ; i <= num ; i++){
//     if(i % 2 == 0){
//         digit = i * -1 ;
//     }
//     else{
//         digit = i * 1
//     }
//     console.log(digit);
// }


//ques6//


//ques 150(doubt...........)
// let n = readlineSync.questionInt('enter n : ');
// let arr = [10, 12, 34, 11, 4, 5, 1];
// for(let i = 0; i < n; i++){
//     let targetEle = readlineSync.questionInt('enter the target : ');
// }
// for(let i = 0; i < n; i++){
//     if(n)
// }


// 
// let n = readlineSync.questionInt('enter number: ');
// let count = 0;
// for(let i = 1; i<=n; i++){
//     if(n%i == 0){
//         count++
//     }
// }
// if(count == 2){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


//  how to run loop in string 

// let str = readlineSync.question('Enter message ');
// let n = str.length;
// let flag = 0;
// let X = readlineSync.question('Enter One word : ');
// for(let i = 0; i< n; i++){
//     if(str.includes(X)){
//        console.log(2 < 12 < 5);
// console.log("20" + 10 + 10);
// console.log("5" - 3); flag = 1
//     }
// }
// if(flag == 1){
//     console.log(X , 'is present in', str);
// }else{
//     console.log(X , 'is not present in', str);
// }


// let n = readlineSync.questionInt('Enter Total number of elements ');
// let num1 = readlineSync.questionInt('Enter num1 ');
// let max = num1;
// let min = num1;
// for(let i = 1; i < n; i++){
//     Elements = readlineSync.questionInt('Enter Elements ');
//     if(max < Elements){
//         max = Elements;
//     }
//     if(min > Elements){
//         min = Elements
//     }
// }
// console.log(max);
// console.log(min);