const input = require('readline-sync');

console.log('<<<<<<<<<<<<<< Welcome to My Crud App!   >>>>>>>>>>')

const choice = input.question('Enter 1 for Sign Up and 2 for Login: - ');
const l=[];

// checking the choice of user
if(choice ==1) {
    // Sign Up
    const name  = input.question('Enter your name: - ');
    const email = input.question('Enter your email: - ');
    const password = input.question('Enter your password: - ');
    // pusing data in an array
    l.push(name);
    l.push(email);  
    l.push(password);

    console.log('do you want to add more data for users ?\n 1. Yes \n 2. No');
    // checking the choice of user
    if(input.question('Enter your choice: - ') == 1) {
        
    const name  = input.question('Enter your name: - ');
    const email = input.question('Enter your email: - ');
    const password = input.question('Enter your password: - ');
    l.push(name);
    l.push(email);
    l.push(password);

    console.log('do you want to see the list of users ?\n 1. Yes \n 2. No');
    
    // checking the choice of user
    if(input.question('Enter your choice: - ') == 1) {
        const userChoice = input.question('Enter your email: - '); // em
        for(let i=0; i<l.length; i++){
            // console.log(l[i]) //0
            if(l[i] == userChoice){
                console.log(`name: ${l[i-1]} email: ${l[i]} password: ${l[i+1]}`);
            }
        }
    }
    else if(input.question('Enter your choice: - ') == 2) {
        console.log('Thank you for using our app');
    }
    else{
        console.log('<<<<<<<<<<<< Invalid choice >>>>>>>>>>>>');
    }


    }else{

        console.log('do you want to see the list of users ?\n 1. Yes \n 2. No');
    
        // checking the choice of user
        if(input.question('Enter your choice: - ') == 1) {
            console.log(`name: ${l[0]} email: ${l[1]} password: ${l[2]}`);
        }
        else if(input.question('Enter your choice: - ') == 2) {
            console.log('Thank you for using our app');
        }
        else{
            console.log('<<<<<<<<<<<< Invalid choice >>>>>>>>>>>>');
        }
    }


}
else if (choice ==2) {
    const email = input.question('Enter your email: - ');
    const password = input.question('Enter your password: - ');
    console.log('Your email is: - ', email);
}

