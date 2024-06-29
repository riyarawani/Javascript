const readlineSync = require('readline-sync');
let RCB_score = readlineSync.questionInt('Enter RCB_score: ');
let CSK_score = readlineSync.questionInt('Enter CSK_score: ');
if(RCB_score - CSK_score >= 18 ){
    console.log('RCB');
}else{
    console.log('CSK');
}