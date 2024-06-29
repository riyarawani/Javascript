// from flowcharts of 80 questions
 const readlineSync = require('readline-sync');
// question 1
// let num = readlineSync.questionInt('Enter a Number : ');
// if(num > 0){
//     console.log("positive Number");
// }else{
//     console.log("Negative Number");
// }

// question 2
// let num = readlineSync.questionInt("enter a Number : "); 
// if (num % 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }


// question 3
// let num1 = readlineSync.questionInt("Enter a Number : ");
// let num2 = readlineSync.questionInt("Enter a Number : ");
// let max = num1;
// if(max < num2){
//     max = num2;
// }else{
//     max = num1
// }
// console.log(max);


// question 4
// let score = readlineSync.questionInt('Enter a Number : ');
// if(score >= 9){
//     Grade = "A";
// }
// else if(score >= 8){
//     Grade = "B";
// }
// else if(score >= 7){
//     Grade = "C";
// }
// else if(score >= 6){
//     Grade = "D"; 
// }
// else if(score >= 5){
//     Grade = "E";
// }
// else {
//     Grade = "F";
// }
// console.log(Grade);


// question 5
// let age = readlineSync.questionInt('Enter your age : ');
// if(age < 12){
//     ticketPrice = 5;
// }
// else if(age > 12 && age < 18){
//     ticketPrice = 10;
// }
// else if(age > 18 && age < 60){
//     ticketPrice = 20;
// }
// else{
//     ticketPrice = 15;
// }
// console.log(ticketPrice);


// question 6 (doubt)
// let year = readlineSync.questionInt('Enter Year : ');
// if(year % 4 == 0){
//     if(year % 400 == 0){
//         console.log(year + "is a leap year");
//     }
//     else()
// }


// question 7
// let price = readlineSync.questionInt('Enter a price : ');
// if(price >= 100){
//     discount = 20;
// }
// else if(price >= 50 && price <100){
    // doubt
//     discount = 10;
// }
// else{
//     discount = 0;
// }
// console.log(discount);


// question 8
// let time = readlineSync.questionInt('Enter time : ');
// if(time < 12){
//     greet = "Good morning"
// }
// else if(time < 18 ){
//     greet = "Good afternoon"
// }
// else{
//     greet = "Good evening"
// }
// console.log(greet);


// question 9 (doubt)
// let Weight= readlineSync.questionInt('Enter Weight : ');
// let Height = readlineSync.questionInt('Enter Height : ');
// let HeightInMeters = Height/100;
// let BMI = Weight/HeightInMeters*2;
// if(BMI < 18.5){
//     category = "underweight";
// }
//     else if(BMI < 24.9){
//         category = 	"HealthyWeight";
//     }
//     else if(BMI < 29.9){
//         category = 	"OverWeight";
//     }
//     else{
//         category = 	"Obesity";
//     }
//     console.log(category , BMI);
    // console.log(BMI);

// strong password project 

// question 10
// let secretNumber = 6;
// let guessNumber = readlineSync.questionInt("Guessing Number = ");
// if(guessNumber == secretNumber){
//     console.log("Correct! you wins the game");
// }
// else if(guessNumber > secretNumber){
//     console.log("Try a lower number");   
// }
// else{
//     console.log("Try a higher number"); 
// }
      


    
// let name1 = "riya123";
// let w = name1.includes("r")
// console.log(w);
// // // if(name.includes("2")){
// // }


// let result = "hello" / 2 ;
// console.log(result);


// practice
// let age = readlineSync.questionInt("enter a number : ");
// age >= 18?console.log("eligible for driving") : console.log("not eligible for driving");

// console.log(2 < 12 < 5);
// console.log("20" + 10 + 10);
// console.log("5" - 3);



// let a = readlineSync.questionInt('Enter a number ');
// let b = readlineSync.questionInt('Enter a number ');
// let c = readlineSync.questionInt('Enter a number ');
// let d = readlineSync.questionInt('Enter a number ');
// let max = a;
// let min = a;

// if(max < b){
//     max = b
// }
// if(max < c){
//     max = c
// }
// if(max < d){
//     max = d
// }
// if(min > b){
//     min = b
// }
// if(min > c){
//     min = c
// }
// if(min > d){
//     min = d
// }
// console.log(max);
// console.log(min);



// HCF
let num1 = readlineSync.questionInt('Enter ');
let num2 = readlineSync.questionInt('Enter ');
let num3 = readlineSync.questionInt('Enter ');
let num4 = readlineSync.questionInt('Enter ');
let num5 = readlineSync.questionInt('Enter ');

if(num1 > num2){
    rem = num1 % num2
}
else{
    rem = num2 % num1
}

if(rem == 0){
    console.log(num2, "as hcf");
}else{
    console.log("1", "as hcf");

}


