let readline = require("readline-sync");

let height = readline.question('Enter a height in meter : ');
let weight = readline.question('Enter a weight in kg : ');
BMI = (weight / (height * height));
if(BMI < 18.5){
    console.log(BMI , "underweight");
}
else if(BMI >= 18.5 && BMI < 25){
    console.log(BMI , "normal weight");
}
else if(BMI >= 25 && BMI < 30){
    console.log(BMI , "over weight");
}
else{
    console.log(BMI , "obese");
}




