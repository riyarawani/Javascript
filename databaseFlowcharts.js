// let user = prompt("enter user :");
// console.log(user); not working in terminal
const readlineSync = require('readline-sync');

// let a = readlineSync.questionInt('Enter the first number: ');
// let b = readlineSync.questionInt('Enter the second number: ');
// console.log(a, b);

// // Flowchart Questions :
// question:3
// let birth_date = readlineSync.questionInt('Enter the birth date: ');
// let birth_month = readlineSync.question('Enter the birth month: ');
// let birth_year = readlineSync.questionInt('Enter the birth year: ');
// console.log(birth_date, birth_month , birth_year);

// question:4
// let a = readlineSync.questionInt('Enter a number: ');
// console.log(a);


// question:5  doubt
// let a = readlineSync.questionInt("Enter a number: ");
// let b = readlineSync.questionInt("Enter a number: ");
// let temp = a;
// let a = b;
// let b = a;
// console.log(a , b);


// question:6
// let a = readlineSync.questionInt('enter a number: ');
// let b = readlineSync.questionInt('enter a number: ');
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)  //doubt
// console.log(a / b)


//question:7
// let a = readlineSync.questionInt('enter a number: ');
//  let b = readlineSync.questionInt('enter a number: ');
// console.log(a/b);
// console.log(a%b);


//question:8 
// let a = readlineSync.questionInt('enter a number: ');
// let last_digit = (a % 10);
// console.log(last_digit);


//question:9
// let celsius = readlineSync.questionInt('enter a temperature: ');
// Fahrenheit = (celsius / 5 * 9 + 32);
// console.log(Fahrenheit);


//question:10  left
//question:11 
// let a = readlineSync.questionInt("enter a number: ");
// let b = readlineSync.questionInt("enter a number: ");
// let Remainder = (a%b);
// largestNumber = (a-Remainder);
// console.log(largestNumber);


//question:12 greater
// let a = readlineSync.questionInt('Enter the number: ');
// b = readlineSync.questionInt('Enter the number: ');
// if(a > b){
//     console.log(a);
// }
// else {
//     console.log(b);
// }


//question:13 even & odd
// let a = readlineSync.questionInt('Enter a number: ');
// if(a % 2 == 0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }


//question:14  negative, positive, zero
// let a = readlineSync.questionInt('enter a number: ');
// if(a == 0){
//     console.log("zero");
// }
// else if(a > 0){
//     console.log("Positive");
// }
// else{
//     console.log("Negative"); //doubt
// }

//question:15  left

//question:16 greater of three nos
// let a = readlineSync.questionInt('enter a number: ');
// let b = readlineSync.questionInt('enter a number: ');
// let c = readlineSync.questionInt('enter a number: ');
// maxNumber = a
// if(b > maxNumber){
//     maxNumber = b;
// }
// if (c > maxNumber){
//     maxNumber = c
// }
// console.log(maxNumber);

//question:17 greater of 4 nos
// let a = readlineSync.questionInt('enter a number: ');
// let b = readlineSync.questionInt('enter a number: ');
// let c = readlineSync.questionInt('enter a number: ');
// let d = readlineSync.questionInt('enter a number: ');
// maxNmber = a
// if(b > maxNmber){
//     maxNmber = (b);
// }
// if(c > maxNmber){
//     maxNmber = (c);
// }
// if(d > maxNmber){
//     maxNmber = (d);
// }
// console.log(maxNmber);

//question:18  left
//question:19  left (smax) Pending

    // let a = readlineSync.questionInt("Enter a Number: ");
    // let b = readlineSync.questionInt("Enter a Number: ");
    // let c = readlineSync.questionInt("Enter a Number: ");
    // maxNumber = a
    // if(b > maxNumber ){
    //     maxNumber = b
    //     secMax = maxNumber
    // }

//question : 20 (salary)
// let basicSalary = readlineSync.questionInt("Enter a Number: ");
// if(basicSalary <= 10000){
//     HRA = (basicSalary*20/100)
//     DA = (basicSalary*80/100)
//     grossSalary = (basicSalary + HRA + DA);
// }
// if(basicSalary <= 20000){
//     HRA = (basicSalary*25/100)
//     DA = (basicSalary*90/100)
//     grossSalary = (basicSalary + HRA + DA);
// }
// else{
//     HRA = (basicSalary*30/100)
//     DA = (basicSalary*95/100)
//     grossSalary = (basicSalary + HRA + DA);
// }
// console.log( grossSalary);


//question:21
// let electricityUnits = readlineSync.questionInt("Enter a Unit: ");
// if(electricityUnits <= 50){
//     cost = (electricityUnits *0.50);
//     totalCost = (cost + 20/100 * cost);
// }
// else if(electricityUnits <= 150){
//     cost = (50*0.50 + (electricityUnits - 50)*0.75);
//     totalCost = (cost + 20/100 * cost);
// }
// else if(electricityUnits <= 250){
//     cost = (50*0.50 + 100*0.75 + (electricityUnits - 150)*1.20);
//     totalCost = (cost + 20/100 * cost);
// }
// else{
//     cost = (50*0.50 + 100 * 0.75 + 100*1.20 + (electricityUnits - 250)*1.50);
//     totalCost = (cost + 20/100 * cost);
// }
// console.log(totalCost);

//question: 22  left third max
// let a = readlineSync.questionInt("Enter a number: ");
// let b = readlineSync.questionInt("Enter a number: ");
// let c = readlineSync.questionInt("Enter a number: ");
// let d = readlineSync.questionInt("Enter a number: ");
// if(a > b){
//     maxNum1 = a
//     Smax1 = b
// }
// else if 


// question: 23 wrong doubt frequency
// let a = readlineSync.questionInt("Enter a number: ");
// b = readlineSync.questionInt("Enter a number: ");
// c = readlineSync.questionInt("Enter a number: ");
// d = readlineSync.questionInt("Enter a number: ");
// e = readlineSync.questionInt("Enter a number: ");
// let count = (1);
// if(a == b){
//     count = (count + 1);
// }
// if(a == c){
//     count = (count + 1);
// }
// if(a == d){
//     count = (count + 1);
// }
// if(a == e){
//     count = (count + 1);
// }
// console.log(a , count);
// if(b == c){
//     count = (count + 1);
// }
// if(b == d){
//     count = (count + 1);
// }
// if(b == e){
//     count = (count + 1);
// }
// console.log(b , count);
// if(c == d){
//     count = (count + 1);
// }
// if(c == e){
//     count = (count + 1);
// }
// console.log(c ,count);
// if(d == e){
//     count = (count + 1);
// }
// console.log(d , count);


// loops

//question : 1 (24)
// let n = readlineSync.questionInt("Enter a number: ");
// let name = readlineSync.question("Enter a name: ");
// for (let i = 0; i < n; i++){
//     console.log(name);
// }


//question : 2 (25)
// let n = readlineSync.questionInt("Enter a number: ");
// for(i = 1; i <= n; i++){
//     if(i % 2 == 0)
//     console.log(i)
// }

//question : 3 (26) 
// let n = readlineSync.questionInt("Enter a number: ");
// let sum = 0
// for(i = 0; i < n; i++){
//     if(i % 2 !== 0)
//     sum = sum+i
// }
// console.log(sum);


//question : 4 (27) 
// let N = readlineSync.questionInt("Enter a number: ");
// let M = readlineSync.questionInt("Enter a number: ");
// let sum = 0
// for(i = N; i<M; i++){
//     sum = (sum+i)
// }
// console.log(sum);


//question : 5 (28) 
// let n = readlineSync.questionInt("Enter a number: ");
// let sum = 0
// for(i = 1; i <= n; i++){
//     sum = (sum + 1/i);
// }
// console.log(sum);    



//question : 6 (29)  
// let num = readlineSync.questionInt("Enter a number: ");
// let count = 0;
// while(num > 0){
//     rem = num % 10
//     count = count + 1
//     num = Math.floor(num/10);
// }
// console.log(count);


//question : 7 (30)
// let num = readlineSync.questionInt("Enter a number: ");
// let sum = 0 
//  while(num > 0){
//     rem = num % 10
//     num = Math.floor(num / 10)
//     sum = sum + rem
// }
// console.log(sum);


//question : 8 (31)
// let num = readlineSync.questionInt("Enter a number: ");
// let reverseNumber = 0
// while(num > 0){
//     rem = num % 10 
//     reverseNumber = (reverseNumber * 10 + rem); 
//     num = Math.floor(num / 10)
// }
// console.log(reverseNumber);


//question : 9 (32) ............



//question :  10(33) 
// let num = readlineSync.questionInt("Enter a number: ");
// let count = 0;
// for(i = 1; i <= num; i++){
//     if(num % i == 0){
//         count++
//     }
// } if (count == 2){
//     console.log("prime number");
// }else{
//     console.log("not a prime number");
// }



//question :  11(34)    
// let num = readlineSync.questionInt("Enter a number: ");
// let sum = 0
// for(i = 1; i < num; i++){
//     if(num%i == 0)
//     sum = sum + i
// }
// if (num == sum){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }


// array


// question 1 (35)
// let L= [1, 2, 4 ,5];
// for(let i = 0 ; i<L.length; i++){
//     console.log(L[i]);
// }

//  question 2 (36)
// let num = readlineSync.questionInt("Enter a number: ");
// let arr = [];
// for(i=1; i<=num; i++){
//     arr.push(i);        
// }                              
// this for loop work as a storing

// for(i = 0; i<arr.length; i++){
//        console.log(arr[i]);
//      }

// this loop count  index  and prints


// question 3 (37)(doubt)?how to declare different inputs
// let num = readlineSync.questionInt("Enter a number: ");
// let arr = [];
// for(let i = 0; i < num; i++){
//     arr.push(i);
// }
// for(i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }


// ARRAY
// question 1
// let l = [23 , 45 , 32 , 25 , 46 , 33 , 71 , 90];
// for(let i = 0; i<l.length; i++){
//     console.log(l[i]);
// }


// question 2
// let naturalNumbers = [];
// for(let i = 1; i<=20; i++){
//     naturalNumbers.push(i);
// }
// console.log(naturalNumbers);

// question 3
// let n = readlineSync.questionInt("enter the size of an array: ")
// let arr = [];
// for(i = 0; i<n; i++){
//     arr[i] = readlineSync.questionInt("enter elements: ");
// }
// for(let i = n-1; i>=0; i--){
//     console.log(arr[i])
// }


// this is for taking an input 
// let arr = [];
// let idx = 0;
// while(idx < 5){
//    arr[idx] = readlineSync.questionInt();
//    idx += 1;
// }


// question 4 (38)
// let n = readlineSync.questionInt("enter the size of an array: ")
// let arr = [];
// for(i = 0; i<n; i++){
//     arr[i] = readlineSync.questionInt("enter elements: ");
// }
// let x = readlineSync.questionInt("enter the target: ");
// for(let i = 0; i<n; i++){
//     if(arr[i]==x){
//         targetExist = 1;
//     }
// }
// if(targetExist == 1){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


// question 5(39)
// let n = readlineSync.questionInt("enter the size of an array : ")
// let arr = [];
// for(let i=0; i<n; i++){
//     arr[i] = readlineSync.questionInt("enter elements: ");
// }
// let evenSum = 0;
// let oddSum = 0;
// for(let i=0; i<n; i++){
//     if(arr[i] % 2 == 0)
//     evenSum += arr[i];
// else{
//     oddSum += arr[i];
// }
// }
// console.log(evenSum , oddSum);



// question 6(40)
// let n = readlineSync.questionInt("Enter the size of an array : ");
// let arr = [];
// for(let i = 0; i<n; i++){
//     arr[i] = readlineSync.questionInt("enter elements: ");
// }
// for(i = 0; i<n; i++){
//     for(j=i+1; j<n; j++){
//         if(arr[i] == arr[j]){
//             console.log(arr[i]);
//         }

//     }

// }


// question: 7(41)(doubt)
// let n = readlineSync.questionInt("Enter the size of an array :");
// let arr = [];
// for(let i = 0; i<n; i++){
//     arr[i]=readlineSync.questionInt("enter an element : ")
// }
// for(i=0; i<n; i++){
//     let count=1;
//     for(let j=i+1; j<n-1; j++){
//         if(arr[i]==arr[j]);
//         count++;{
//             console.log(arr[i] , count); 
//         }
//     }
// }

// question : 8(42)
// let n = readlineSync.questionInt("Enter the size of an array :");
//  let arr = [];
//  for(let i = 0; i<n; i++){
//      arr[i]=readlineSync.questionInt("enter an element : ")
//  }
//  for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < arr[i]; j++) {
//         str = str + ">";
        
//     }
//     console.log(str);
// }




// question >>>>>>>>>>>>>>>>> doubt(dont want undefine element)
// deletion
// let num = readlineSync.questionInt('Enter a number : ');
// arr = [];
// for(let i = 0; i<num; i++){
// arr[i] = readlineSync.questionInt('Enter a elements : ')
// }
// let M = readlineSync.questionInt('Enter a target position');
// let item = M;
// for(let j = M-1; j<arr.length ; j++){
//     arr[j] = arr[j+1];
// }
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// question 2
// let num = readlineSync.questionInt('Enter a number : ');
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(a)
// for(let i = 0; i<=num-2; i++){
//     c = a+b;
//     console.log(c);
//     a = b;
//     b = c;
// }


// question (sum upto single digit) doubt.............
//  let num = readlineSync.questionInt('Enter number : ');
// let sum = 0;
//     while (num>0){
//         lastDigit = num%10;
//         sum += lastDigit;
//         num = Math.floor(num/10);
//     }
//     let s = 0;
//     while (sum > 0){
//         lastDigit = sum%10;
//         s += lastDigit
//         sum = Math.floor(sum/10);
//     }
//       console.log(s);


// question (hcf and lcm)
// let num = readlineSync.questionInt('Enter a number : ');
// let a = readlineSync.questionInt('Enter a : ');
// let b = readlineSync.questionInt('Enter b : '); 
// for(let i=0; i<num; i++){
// }if(a>b){
//     Num = a;
//     deno = b;
// }
// else{
//     Num = b;
//     deno = a;
// }
// let rem = (Num % deno);
// if(rem == 0){
//     hcf=deno;
// }
// else{
//     deno = rem;
//     Num = deno;
//     rem = (Num % deno);
// }
// HCF = deno;
// LCM = (a*b)/HCF
// console.log(HCF);
// console.log(LCM);


/* question (hcf for n numbers)
let number = readlineSync.questionInt('Enter a number : ');
left*/

// question (Prime factors)
// let number = readlineSync.questionInt('Enter Number : ');
// for(let i = 0; i<=number; i++){
//     if(number % i ==0){
//         let count=0;
//         for(let j=1; j<=i; j++){
//             if(i % j == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             console.log(i);
//         }
//     }
// }

// question (palindrome)
// let n = readlineSync.questionInt('Enter a number : ');
// let rev = 0;
// let temp = n;
// while(n > 0){
//     rem = n % 10;
//     rev = (rev*10 )+ rem;
//     n = Math.floor(n / 10);
// }
// if(temp == rev){
//     console.log("yes");
// }
// else{
//     console.log("no")
// }

// question (series)
// let n = readlineSync.questionInt('Enter a number : ');
// let x = readlineSync.questionInt('Enter X : ');
// let sum = 0;
// let num = 1;
// for(let i = 0; i <= n; i++)

// question (hcf of n numbers)





// let n = readlineSync.questionInt('Enter a Number : ')
// let max = a;
// if(max<b){
//     max = b;
// }
// else{
//     max = a;
// }
// console.log(max);





// let score = readlineSync.questionInt('Enter a Number : ');
// if(score == 10){
//     Grade = A;
// }
// else if(score == 9){
//     Grade = B;
// }
// else if(score == 8){
//     Grade = C;
// }
// else if(score == 7){
//     Grade = D; 
// }
// else if(score == 6){
//     Grade = E;
// }
// else {
//     Grade = F;
// }
// console.log(Grade);