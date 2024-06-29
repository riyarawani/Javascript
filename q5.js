const readline = require('readline-sync');

let destination = readline.question('Enter destination : ');
let weatherConditions = readline.question('Enter the weather : ');
if(destination == "tropical beach" &&  weatherConditions == "sunny"){
    console.log("You should carry" + "sunscreen, swimwear, sunglasses, beach towel");
}
else if(destination == "mountain hike"  &&  weatherConditions == "cloudy"){
    console.log("You should carry" + "sturdy hiking boots,  waterproof jacket,  backpack, map");
}
else if(destination == "city tour"  &&  weatherConditions == "rainy"){
    console.log("You should carry" + "umbrella, waterproof shoes, raincoat, portable charger");
}
else if(destination == "desert adventure"  &&  weatherConditions == "hot"){
    console.log("You should carry" + "wide-brimmed hat, lightweight clothing, sunscreen, plenty of water");
}
else{
    console.log("pack appropriate clothing and accessories based on common sense")
}