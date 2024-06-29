// const readlineSync = require('readline-sync');

// console.log("*************Let's Create Strong Password**************");
// let password = readlineSync.question('Enter your Password ');
// if(password.length >= 6){
//     if(password === password.toUpperCase){
//         if(password == password.toLowerCase){
//             if(password >= 0 && password<= 9){
//                 console.log("Strong password! Sucessfull!")
//             }
//             else{
//                 console.log("Weak password! Your password must contain at least one uppercase letter, one lowercase letter, one number, ");
//             }
//         }
//         else{
//             console.log("Weak password! Your password must contain at least one uppercase letter, one lowercase letter, one number,");
//         }
//     }
//     else{
//         console.log("Weak password! Your password must contain at least one uppercase letter, one lowercase letter, one number.");
//     }
// }
// else{
//     console.log("Weak password! Your password must contain 6 characters.");
// }





let password = "Ujjwal@123";
let pass2 = password.split("");

let pass = password != password.toUpperCase()
let checkLowerCase = password != password.toLowerCase()

let pass3 = pass2.filter((riya)=>{
    return isNaN(riya*1)
});
let check; 
if(pass2 > pass3){
    check = true
}else{
    check = false
}

 let char = ["@" , "#"]
 let char1 = char.filter((character)=>pass2.includes(character))
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