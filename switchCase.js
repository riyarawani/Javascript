const readlinesync = require('readline-sync') ;

// let day = readlinesync.questionInt('enter day : ');
// if(day == 1){
//     console.log('Monday');
// }else if(day == 2){
//     console.log('Tuesday');
// }
// else if(day == 3){
//     console.log('Wednesday');
// }
// else if(day == 4){
//     console.log('Thrusday');
// }
// else if(day == 5){
//     console.log('Friday');
// }
// else if(day == 6){
//     console.log('Saturday');
// }
// else if(day == 7){
//     console.log('Sunday');
// }
// else{
//     console.log('Invalid date');
// }






// 

let favoritePet = readlinesync.question('enter favouritePet ');

switch(favoritePet) {
    case "dog":
        console.log("You love dogs! Woof woof!");
        break;
    case "cat":
        console.log("You love cats! Meow meow!");
        break;
    case "bird":
        console.log("You love birds! Tweet tweet!");
        break;
    default:
        console.log("That's a unique pet!");
}
