let readline = require('readline-sync');

// .replace() Method
// let str = readline.question('Enter message ');
// let str = "hello riya";
// console.log(str.replace("hello" , "hi"));


// as it is case sensitive so ....if you want to change uppercase str , apply /i

let str = "hello riya";
console.log(str.replace(/Hello/i, "Hi")); 
// not working ....doubt......