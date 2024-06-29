let readline = require('readline-sync');

let carParked = readline.questionInt('enter carParked : ');
if(carParked == 2){
    parkingFee = carParked * 30 ;
}
else if (carParked <= 5){
    parkingFee = ((2*25)+(carParked - 2)*20);
}
else{
    parkingFee = ((2*25) + (3*20)+(carParked-5)*15);
}
console.log(parkingFee);
