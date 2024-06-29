const input = require('readline-sync');

console.log("<<<<<<<<<<<WELCOME TO MY CRUD GAME>>>>>>>>>>>>>>>");

let userChoice = input.question("Enter 1 for sign up and 2 for log in: ");
let array = [];
if(userChoice == 1){
    let Name = input.question('Enter Name: ');
    let Email = input.question('Enter Email: ');
    let Password = input.question('Enter Password: ');
    array.push(Name);
    array.push(Email);
    array.push(Password);


    let dataRead = input.question('enter "yes" for reading the data and "no" for not interested : ');
 // console.log('Do you want to see your data? /n 1. yes /n 2. no');
 if(dataRead == 'yes'){
    let userSearch = input.question('Enter your Email : ');
    for(i=0; i<array.length; i++){ 
       if (array[i] == userSearch);
        console.log(array[i-1] , array[i] , array[i+1]);
       
      //  console.log('Do you want delete your data ? /n 1. yes  /n 2. no ');
      let dataDelete = input.question('Do you want to delete the data : Enter /n "yes" /n "no ');
       if(dataDelete == "yes");
         console.log('which data do you want to delete : /n 1. name  /n 2. Email /n 3. Password')
           if (input.question('Enter your choice: - ') == yes);
         
       
    }
   }
}
































// const userChoice = input.question("Enter 1 for sign up and 2 for Login ");
// let data = []
// if(userChoice==1){
//     let name = input.question('enter your name :-');
//     let email = input.question('enter your Email :-');
//     let password = input.question('enter your Password :-');
//     data.push(name);
//     data.push(email);
//     data.push(password);

//     console.log('do you want to see your data? /n 1.yes /n 2.No  : ');
//     if(input.question('Enter a number:-')== "yes"){
//         let userChoice = input.question('Enter your Email Id :- ');
//         for(let i=0; i<data.length; i++){
//             if(data[i]==userChoice){
//                 console.log(`name : data[1-1] email : data[i] password : data[i+1]`)
//             }
//         }

//         console.log('Do you want to Update you detailes? : /n 1.yes /n 2. No need');
//         if(input.question('Enter a number')=='yes'){
//             console.log('Which data you want to update ?  /n 1. name /n email /n password ');
//         }
        
//     }
// }
