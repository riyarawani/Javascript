const readlineSync = require('readline-sync');

// arr = [3 , -5 , 2 , -7 , 8 , 0 , 1];
// let positiveSum = 0;
// let negativeProduct = 1;
// let evenCount = 0;
// let oddCount = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > 0){
//         positiveSum += arr[i]

//     }
//     else if(arr[i]<0){
//         negativeProduct = negativeProduct * arr[i]
//     }
    
//     if(arr[i] % 2 == 0){
//         evenCount +=1;
//     }
//     else{
//         oddCount += 1
// }

// console.log(positiveSum);
// console.log(negativeProduct);
// console.log(evenCount);
// console.log(oddCount);















// arr = [3 , -5 , 2 , -7 , 8 , 0 , 1];
// let positiveSum = 0;
// let negativeProduct = 1;
// let evenCount = 0;
// let oddCount = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > 0){
//         positiveSum += arr[i]
//     }
//     else if(arr[i]<0){
//         negativeProduct = negativeProduct * arr[i]
//     }
    
//     if(arr[i] % 2 == 0){
//         evenCount +=1;
//     }
//     else{
//         oddCount += 1
//     }
// }    


// console.log(positiveSum);
// console.log(negativeProduct);
// console.log(evenCount);
// console.log(oddCount);


// let n = readlineSync.questionInt('enter the size of an array : ');
// arr = [];
// positiveSum = 0;
// negativeProduct = 1;
// evenCount = 0;
// oddCount = 0;
// for(let i = 0; i<n ; i++){
//     arr[i] = readlineSync.questionInt('enter an element: ');
// }
// for(let i=0; i<n; i++){
//     if(arr[i]>0){
//         positiveSum += arr[i]
//     }
//     else if(arr[i]<0){
//         negativeProduct *= arr[i]
//     }
//     else{
//         if(arr[i] % 2 === 0){
//             evenCount+=1
//         }
//         else{
//             oddCount+=1
//         }
//     }
// }
//  console.log(positiveSum);
//  console.log(negativeProduct);
//  console.log(evenCount);
//  console.log(oddCount);




let n = readlineSync.questionInt('Enter the size of an array: ');
let arr = [];
let positiveSum = 0;
let negativeProduct = 1;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < n; i++) {
    arr[i] = readlineSync.questionInt('Enter an element: ');
}

for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
        positiveSum += arr[i];
    } else if (arr[i] < 0) {
        negativeProduct *= arr[i];
    } else {
        if(arr[i] % 2 == 0){
            evenCount += 1 ;
        }
        else{
            oddCount += 1
        }
    }
}

console.log("Positive sum:", positiveSum);
console.log("Negative product:", negativeProduct);
console.log("Even count:", evenCount);
console.log("Odd count:", oddCount);
