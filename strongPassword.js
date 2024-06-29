// const readlinesync = require('readline-sync');
// console.log("*************Let's create a Strong Password**************** ");
// let Password = readlinesync.question('Enter Password ');
// // let char = "abcdefghijklmnopqrstuvwxxyz";
// // let CHAR ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // let number = "0,1,2,3,4,5,6,7,8,9";
// // let specialCharacter = "@#$%_";
// if(Password.length >= 6){
//     if(Password != Password.toLowerCase() && Password != Password.toUpperCase()){
//             // if(number >= '0' && number >= '9'){
//                 console.log("Strong password! Sucessfull!")
//             // }
//     }
//     else {
//         console.log("Weak password! Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
//     }
// }

// let password = "Ujjwal@123";
// let pass = password != password.toUpperCase()
// console.log(pass);

// let password1 = "Ujjwal@123";
// let checkLowerCase = password != password.toLowerCase()
// console.log(checkLowerCase);

let password = "Ujjwal@123";
let pass2 = password.split("");
// console.log(pass2);
// console.log(pass2.length);

let pass = password != password.toUpperCase()
let checkLowerCase = password != password.toLowerCase()

let pass3 = pass2.filter((riya)=>{
    return isNaN(riya*1)
});
// console.log(pass3)
// console.log(pass3.length);

let check; 
if(pass2 > pass3){
    check = true
}else{
    check = false
}

 let char = ["@" , "#"]
 let char1 = char.filter((character)=>pass2.includes(character))
//  console.log(char1)
 let specialCharacter;
 if(char1.length > 0){
    specialCharacter = true
 }else{
    specialCharacter = false
 }
 

 if( pass && checkLowerCase && check && specialCharacter){
    console.log("congaratulations! Your ")
 }
 else{
    console.log(" Weak password ")
 }