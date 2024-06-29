// from 40questions(database)
const readlineSync = require('readline-sync');
// ques146............(odd number)
// let L = [23, 45, 32, 25, 46, 33, 71, 90];
// let i = 0;
// while(i < L.length){
//     if(L[i] % 2 !== 0){
//         console.log(L[i]);
//     }
//     i++
// }



// ques147............(natural number till 20)
// let arrSize = readlineSync.questionInt('enter array size : ');
// let natNum = [];
// for(let i = 0; i < arrSize; i++){
//     natNum[i] = i+1;
// }
// console.log(natNum);


// ques148
// let arrSize = readlineSync.questionInt('Enter array size : ');
// let arr = [];
// for(let i = 0; i < arrSize; i++){
//     let fname = readlineSync.question('Enter Name : ');
//     arr[i] = fname;
// }
// console.log(arr);

// ques 149(doubt)
// let I = [5, 4, 9, 2, 1, 0];
// for (let i = I.length-1; i >= 0; i--){
//     console.log(I[i]);
// }




// question 151
// let n = readlineSync.questionInt('Enter the size of an array : ');
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let element = readlineSync.questionInt('enter Elements : ');
//     arr[i] = element;
// }
// let target = readlineSync.questionInt('Enter Target : ');
// let targetExist = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] == target){
//         targetExist = 1;
//     }
// }
// if(targetExist == 1){
//     console.log('yes');
// }else{
//     console.log('no'); 
// }


// question 152
//  let n = readlineSync.questionInt('Enter size of an array : ');
//  let arr = [];
//  for(let i = 0; i < n; i++){
//     let element = readlineSync.questionInt('enter Element ');
//     arr[i] = element;
//  }
// //  (doub)
// let c = 0;
// for(let i = 0; i < n; i++){
//     if(arr[i+1] == arr[i] + 1){
//         c += 1;
//     }
// }
//  if(c == n-1){
//     console.log('yes');
//  }
//  else{
//     console.log('no');
//  }



// question 153
// let n = readlineSync.questionInt('Enter the size of an array : ');
// let arr = [];
// for(let i = 0; i < n; i++){
//     element = readlineSync.questionInt('enter elements : ')
//     arr[i] = element;
// }
// let sum = 0;
// let count = 0;
// for(let i = 0; i < n; i++){
//     count += 1;
//     sum += arr[i];
//     avg = sum / count;
// }
// console.log(sum);
// console.log(avg);


// 23rd may 2024
// question 155
// let arrSize = readlineSync.questionInt('enter array Size: ');
// let arr = [];
// for(let i = 0; i < arrSize; i++){
//     let element = readlineSync.questionInt('Enter elements: ');
//     arr[i] = element;
// }
// let positiveCount = 0;
// let negativeCount = 0;
// for(let i = 0; i < arrSize; i++){
//     if(arr[i] >= 0){
//         positiveCount++
//     }
//     else{
//         negativenCount++ 
//     }
// }
// console.log(positiveCount);
// console.log(negativeCount);



// question 156(doubt......)(duplicate)
// let arrSize = readlineSync.questionInt('enter array Size: ');
//  let arr = [];
// for(let i = 0; i < arrSize; i++){
//     let element = readlineSync.questionInt('Enter elements: ');
//     arr[i] = element;
// }
// for(let i = 0; i < arrSize; i++){
//     for(let j = i + 1; j < arrSize; j++){
//         if(arr[i] === arr[j]){  
//             console.log(arr[i]);
//         }
//     }
// }

// question 157
// let arrSize = readlineSync.questionInt('Enter the size of an array: ');
// let arr = [];
// for(let i = 0; i < arrSize; i++){
//     arr[i]= readlineSync.questionInt('Enter the elements: ');
// }
// for(let i = 0; i < arrSize; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }

// question 158
// let arrSize = readlineSync.questionInt('Enter the size of an array: ');
// let arr = [];
// for(let i = 0; i < arrSize; i++){
//     arr[i]= readlineSync.questionInt('Enter the elements: ');
// }
// for(let i = 0; i < arrSize; i++){
//     if(arr[i] % 2 !== 0){
//         console.log(arr[i]);
//     }
// }


// question 159 (M - 1)
// let n = readlineSync.questionInt('enter number: ');
// let factorArr = [];
// let index = 0;
//     for(let j = 1; j <= n; j++){
//         if(n % j == 0){
//             factorArr[index] = j;
//             index++;
//         }
//     }
// console.log(factorArr);

// same question(M - 2)
// let n = readlineSync.questionInt('enter number: ');
// let factorArr = [];
//     for(let j = 1; j <= n; j++){
//         if(n % j == 0){
//             factorArr.push(j);
//         }
//     }
// console.log(factorArr);



// question 160
// let n = readlineSync.questionInt('enter n: ');
// let arr = [];
// let index = 0;
// for(let i = 1; i <= n; i++){
//     let count = 0;
//     for(let j = 1; j <= i; j++){
//         if(i % j == 0){
//             count++
//         }
//     }
//     if(count == 2){
//         arr[index] = i;
//         index++
//     }
// }
// console.log(arr);


// question 161
// let n1 = readlineSync.questionInt('enter arraysize  ');
// let arr1= [];
// for(let i = 0; i < n1; i++){
//     arr1[i] = readlineSync.questionInt('Enter Elements : ');
// }
// let n2= readlineSync.questionInt('enter arraysize  ');
// let arr2= [];
// for(let i = 0; i < n2; i++){
//     arr2[i] = readlineSync.questionInt('Enter Elements : ');
// }
// console.log();


//     for(let j = n1-1; j < n2; j++){
//         arr1[i] = arr2[j]
//     }

// console.log(arr1);



// question 175





// >>>>>>>>>>>>>>>>>>

// Define the characters to permute
// let str = "ABC";
// let n = str.length;

// // Use nested loops to generate permutations
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (j == i) continue; // Skip the same character

//         for (let k = 0; k < n; k++) {
//             if (k == i || k == j) continue; // Skip the same character

//             // Print the permutation
//             console.log(str[i] + str[j] + str[k]);
//         }
//     }
// }





// // Take seat number input from the user
// let X = readlineSync.questionInt('Enter seat number (1 to 100): ');

// // Determine the nearest exit
// let exit = 'Left';
// if (X > 50) {
//     exit = 'Right';
// }

// // Print the result
// console.log(exit);




// minimum and  maximum
// let n = readlineSync.questionInt('Enter Total number of elements ');
// let arr = [];
// for(let i = 0; i < n; i++){
//    arr[i]= readlineSync.questionInt('Enter Elements ');
// }
// let max = arr[0];
// let min = arr[0];
// for(let i = 0; i < n; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }

// console.log(max);
// console.log(min);




// minimum
// let n = readlineSync.questionInt('Enter Total number of elements ');
// let arr = [];
// for(let i = 0; i < n; i++){
//    arr[i]= readlineSync.questionInt('Enter Elements ');
// }
// let min = arr[0];
// for(let i = 0; i < n; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);
