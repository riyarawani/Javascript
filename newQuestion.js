const readlineSync = require('readline-sync');

// for one increment

// let array = [];
// let n = readlineSync.questionInt('Enter arraySize  ');

// for (let i = 0; i < n; i++) {
//     array[i] = readlineSync.questionInt('enter elements  ');
// }

// for(let i = 0 ; i < array.length ; i++){
//     let arr = [];
//     let targetElement = array[i + 1] - array[i];
//     // if (targetElement < array[i + 1] && targetElement > array[i]) 
//         if (targetElement > 1){
//         for (let j = 0; j < targetElement - 1; j++) {
//             arr[j] = (array[i] + 1 + j);
//         }
//         array.splice(i+1 , 0 , arr);
//     }
// }
// console.log(array);




//  for 2 increment

let array = [];
let n = readlineSync.questionInt('Enter arraySize  ');

for (let i = 0; i < n; i++) {
    array[i] = readlineSync.questionInt('enter elements  ');
}

for(let i = 0 ; i < n ; i++){
    let arr = [];
    let targetElement = Math.floor((array[i + 1] - array[i]) / 2) ;
    // if (targetElement < array[i + 1] && targetElement > array[i]) 
        if (targetElement >= 1){
        for (let j = 0; j <targetElement-1 ; j++) {
            arr[j] = (array[i] + 2 * (j+1) );
        }
        array.splice(i+1 , 0 , arr);
    }
}
console.log(array);




