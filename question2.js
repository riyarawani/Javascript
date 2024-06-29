const readlineSync = require('readline-sync');


// let n = readlineSync.questionInt('Enter a number : ');
// let evenSum = 0;
// let oddSum = 0;
// for(let i = 0; i<=n; i++){
//     if(i % 2 == 0){
//         evenSum += i**2
//     }
//     else{
//         oddSum += i**3
//     } 
// }
// console.log(evenSum);
// console.log(oddSum);



// let n = readlineSync.questionInt('Enter a number : ')
// let evenSum = 0;
// let oddSum = 0;
// let totalSum = 0;
// let i = 0;
// while(i <= n){
//     if(i % 2 == 0){
//         evenSum += i**2;
//     }
//     else{
//         oddSum += i**3;
//     }
//     i++
// }
// console.log(evenSum);
// console.log(oddSum);
// console.log('totalSum' , evenSum + oddSum);

// for prime numbers
// let n = readlineSync.questionInt('enter a number : ');
// let i = 1 ;

// while(i <= n){
//     let j = 1 ;
//     let count = 0 ;
//     while(j <= i){
//         if(i % j == 0){
//             count += 1 ;
//         }
//         else{
//             count+=0;
//         }
//         j++
//     }
//     if(count == 0){
//         console.log(i,"is a prime no.");
//     }
//     i++ ;
// }
// let n = readlineSync.questionInt('enter a number : ');
// let i = 1;
// let primeCount = 0;

// while(primeCount < n){
//     let j = 1;
//     let count = 0;
//     while(j <= i){
//         if(i % j == 0){
//             count += 1;
//         }
//         j++;
//     }
//     if(count == 2){
//         primeCount += 1;
//         console.log(i, "is a prime no.");
//     }
//     i++;
// }

let n = readlineSync.questionInt('enter a number : ');
let i = 2;

while(i <= n){
    let j = 2;
    let isPrime = true;
    
    while(j <= Math.sqrt(i)){
        if(i % j == 0){
            isPrime = false;
            break;
        }
        j++;
    }
    
    if(isPrime){
        console.log(i, "is a prime no.");
    }
    i++;
}