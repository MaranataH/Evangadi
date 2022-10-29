// Advanced JavaScript Algorithms - practice exercise
// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

//stape 1
//understanding  the problem  statment
 // given array ===>prints in coonsole another array only containt the even number also even indexes.
 
 
 //stape 2
 //Hand-write the solution or solve it on paper first
 // given array ===>prints in coonsole another array only containt the even number also even indexes.
 
 
 //stape 3

//Craft a general step that can be followed to solve any kind of similar problem.
// 1. wright a function, with name (getOnlyEven) with parameter (x)

//2 no need to wright condition for this problem 

//3 declear variable let= arry=[]
// 4  Write the pseudo code line by line  for {i=0; i<x.length; i++
//if x[i] % 2===0 && i %2 ===0 
//        x[i ]this the value       [i] thid index of the array

//}
// then return  arry[]

//stape 5 writing to jave script

// function getOnlyEven(x){
//     let arry=[];
// if(Array.isArray(x)){
//     for (let i =0 ;i< x.length; i++) {

//         if(x[i] %2===0 && i%2 ===0){
//         arry.push(x[i]);
//         }
        
//     }  
//     return  arry;
// }
// else{console.log('please return a valid array');
// }

// }
//  console.log(getOnlyEven(1, 2, 3, 6, 4, 8) );
// // console.log(getOnlyEven(1, "elroi", "ebenezer" , 4));


// function getOnlyEvens(numArray){

//     //Check if input is array

//     if(!Array.isArray(numArray)){
//         return "Please Input an Array!!"
    // }

    // Check if array elements are all numbers

//     for(i = 0; i < numArray.length; i++){
//         if(typeof(numArray[i]) !== 'number'){
//         return "All Elements of the Array Must be Numbers!!"
//         }
//     }

//     let evenArray = [];

//     for(i = 0; i < numArray.length; i = i + 2){

//         if(numArray[i] % 2 == 0){

//             evenArray.push(numArray[i]);
//         }
//     }

//     return evenArray

// }

// console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
// console.log(getOnlyEvens([0, 1, 2, 3, 4]))
// console.log(getOnlyEvens(2));
// console.log(getOnlyEvens([0, 1, "This", 3, 4]));



// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32


// function reverseCompare(x){
//     let y = x.toString() .split(' ').reverse().join('')
//     if (x>y){
//         return 'ok'
//     }
// else{
//     return 'Not ok'
// }
// }
// console.log(reverseCompare(72));
// console.log(reverseCompare(23));



// function reverseCompare(num){

//     if(typeof(num) !== 'number'){

//         return "Please Input a Number"

//     }

//     numString = num.toString();

//     if(numString.length !== 2){

//         return "Please Input a Two-digit Number";
    
//     }

//     reverseNumString = numString.split("").reverse().join("")

//     // reverseNum = numString[1] + numString[0];

//     if(numString >= reverseNumString){

//         return 'OK';
//     }

//     else{

//         return 'Not OK'
//     }

// }

// console.log(reverseCompare(72)) //prints "ok" because 72 > 27
// console.log(reverseCompare(23))//prints "Not ok", because 23 is not greater than 32


// // Question 3
// // ● Write a function that takes a positive integer and returns the factorial of the number.
// // Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

// function factorialPositiveInteger(n){
// let x=1;
//     // if(typeof(n)=== "number"&& n>=0){
//        for(i=1; i<=n; i++){
//         x=x*i;

//     }
       
       
//     }
//     return x;
//     }



// console.log(factorialPositiveInteger(5));
// console.log(factorialPositiveInteger(6));
// console.log(factorialPositiveInteger(0));



// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6


// function checkMeera(numArray){

//     //Check if input is array

//     if(!Array.isArray(numArray)){
//         return "Please Input an Array!!"
    // }

    // Check if array elements are all numbers

//     for(i = 0; i < numArray.length; i++){
//         if(typeof(numArray[i]) !== 'number'){
//         return "All Elements of the Array Must be Numbers!!"
//         }
//     }

//     // let n2Array = 2 * numArray; 
//     let n2Array = numArray.map(x => x * 2);
    
//     for(i = 0; i < numArray.length; i++){

//         if(n2Array.includes(numArray[i])){

//             return "I am NOT a Meera array"

//         }
        
//     }

//     return "I am a Meera array" 
    
// }

// console.log(checkMeera([10, 4, 0, 5])) //outputs “I am NOT a Meera array” because 5 *
// // 2 is 10
// console.log(checkMeera([7, 4, 9])) //outputs “I am a Meera array”
// console.log(checkMeera([1, -6, 4, -3])) //outputs “I am NOT a Meera array” because -3



// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

function dualArray(num){
    if (num.length % 2 !== 0) {
    return 0;
    } else{
    let sortedArray = num.sort((a, b) => a - b );
    let evenIndex = num.filter((value,i) => i %2 === 0)
    let oddIndex = num.filter((value,i) => i %2 !== 0)
    let compare = evenIndex.map((value, i) => value == oddIndex[i])
    if (compare.every((n) => n === true)){
    return 1;
    }
    }
    }
    console.log(dualArray([1, 2, 1, 3, 3, 2])) //output 1
    console.log(dualArray([2, 5, 2, 5, 5])) //output 0
    console.log(dualArray([3, 1, 1, 2, 2])) //putput 0






// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
