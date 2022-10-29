// // Question 1
// // ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// // the JavaScript for loop.

// // function printToTen(){
// //     if(arguments.length != 0){
// //         console.log("No Need To Submit Arguments")
// //     }
// //     else{
// //         for(i = 1; i <= 10; i++) {
// //             console.log(i);
// //         }
// //     }
// // }

// // printToTen();
// // printToTen(10);





// // function printToTens() {
// //     for (let i = 1; i <11; i++) {
// //         console.log(i); 
        
// //     }
    
    
        
    
// //     }

// // printToTen()



// // function printToTen(num) {
// // if (num= !== "number" || num<0  )
// // {
// // return "please enter Number Value"}

// // else { for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    

    
// // }

// // }  


// // Question 2
// // ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// // console. Note: each output should be displayed on a new line.
// // ○ Test case: If you give 7 to the function, output should look like this:
// // 8
// // 9
// // 10
// // 11
// // 12



// // function printNextFive(num){
// //         if(typeof(num) != 'number' || num < 0 ){
// //             console.log("Please Enter a Positive Integer")
// //         }
// //         else {
// //             for(i = 1; i <= 5; i++){
// //                 console.log(num + i)
// //             }
// //         }
// //     }
    
// //     printNextFive(7)
// //     printNextFive(-7)
// //     printNextFive("Swimming Pool")
    
//     // // A | B    A|B
//     // // T   T     T
//     // // T   F     T
//     // // F   T     T
//     // // F   F     F
    
//     // // A | B    A&B
//     // // T   T     T
//     // // T   F     F
//     // // F   T     F
//     // // F   F     F
    
//     // // function printNextFive(num){
//     // //     if(typeof(num) == 'number' & num >= 0){
//     // //         for(i = 1; i <= 5; i++){
//     // //             console.log(num + i)
//     // //         }
//     // //     }
//     // //     else {
//     // //         "Please Enter a Positive Integer"
//     // //     }
//     // // }
    
    

// // // Question 3
// // ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// // given number.
// // ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// // 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)



    

// // function sumNextTen(num){
// //         if(typeof(num) != 'number' || num < 0 ){
// //             console.log("Please Enter a Positive Integer")
// //         }
// //         else {
// //             let sum = 0;
// //             for(i = 1; i <= 10; i++){
// //                 let x = num + i;
// //                 sum = sum + x;
// //             }
// //             console.log(sum);
// //         }
// //     }
    
// //     sumNextTen(7);

// //       function sumOfNext10Numbers(num) {
// //   let sum = 0;
// //   for (i = num + 1; i <= num + 10; i++) {
// //     sum = sum + i;
// //   }
// //   return sum;
// // }

// // console.log(sumOfNext10Numbers(7));


// // function sumOfNext10Numbers(num) {
// //       let sum = 0;
// //       for (i = num + 1; i <= num + 10; i++) {
// //         sum = sum + i;   8<= 7+10
// //                          9<=7+10
// //                          17<=7+10
// //                          18<=7+10  this point will be the break point
 
// //       }
// //       return sum;
// //     }
// // 8,9,10,11,12,13,14,15,16,17,
  
// //     console.log(sumOfNext10Numbers(7));

// // Question 4
// // ● Write a function that takes an array as an argument and prints every element of the array on the
// // console.
// // ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// // 1
// // Hello
// // 8
// // // 44
// //  function argumentArray(para) {
// //     if (!Array.isArray(para)){
// //         console.log("Please put an array");

// //     }
// //     for (let i = 0; i < para.length; i++) {
// //         console.log(para[i]);
        
// //     }
    
// //  }

// //  argumentArray([1, "Hello",8,44])
// //  argumentArray(1,2,3,4)
 



// // // Question 5
// // // ● Write a function that takes an array as an argument and prints the total number of elements
// // // found in the array. Hint: use a property of the Array object to solve this question.
// // // ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// // // ○ Test case 2: Given the array a = ["world", 13], output should be: 2


// // function arrayLength(arr){
// //     if(!Array.isArray(arr)){
// //         console.log("please enter an Array");
// //     }
// //     console.log(arr.length);
// // }

// // function arrayLength(arr){
// //         if(Array.isArray(arr) ==  true){
// //             console.log(arr.length);
// //         }
// //         else{
// //             console.log("Please Enter an Array!")
// //         }
// //     }
    
// //     arrayLength(a); //4
// //     arrayLength(["world", 13]) //2
// //     arrayLength([1,6,7]) //3
// //     arrayLength( 1, "Hello", 8, 44 )





// // Question 6
// // ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// // all the numbers in the array.
// // ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// // should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// // ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// // 3 + 0


// function sumArray(arr) {
//     //     let sum = 0;
//     //     // check if arry takes arry.
//     //     if (!Array.isArray(arr)) {
//     //         return "Please input an array"
//     //     }
//     //     for (let i = 0; i < arr.length; i++) {
//     //         sum = sum + arr[i]
//     //         // Check if the arry takes only number.     
//     //         if (typeof (arr[i]) !== "number") {
//     //             return "All elements of the array must be numbers"
//     //         }
//     //     }
//     //     return sum;
//     // }
    
//     // console.log(sumArray([5, 6, 99, 8, 76, 4, 68, 44]))
//     // console.log(sumArray([5, 6, 99, 8, 76, 4, 68, "44"]))
//     // console.log(sumArray([5, 6, 99, 8, 76, 4, 68, "a"]))
//     // console.log(sumArray(5, 6, 99, 8, 76, 4, 68, 44))
    
    

// // function arraySum(arr){ 
// //     if(Array.isArray (arr) == true ){
// //             let sum = 0;
// //             for(i = 0; i < arr.length; i++){
// //                 if( typeof arr[i] == "number")
// //                 sum = sum + arr[i];
// // else
// // return "Please Enter number array"

// //             }return (sum);
// //         }
// //         else{
// //             return("Please Enter an Array!")
// //         }
// //     }
    
// //      console.log(arraySum([5, 6, "hi", 8, 76, 4, 68, 44]));  
// //     console.log(arraySum([3, 0]));  
// // console.log(arraySum(4));


// // Question 7
// // ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// // odd numbers of the array from the total sum of all even numbers and logs the result in the
// // console.
// // ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// // should be: 102
// // ■ Sum of odd numbers: 5 + 99 = 104
// // ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// // ■ Difference between total even and total odd numbers: 206 - 104 = 102


// // function evenMinusOdd(arr){
//      // check if arry takes arry.
// //         if(Array.isArray(arr) ==  true){
// //             let evenSum = 0;
// //             let oddSum = 0;
// //             for(i = 0; i < arr.length; i++){
// //                 if(arr[i]%2 == 0){
// //                     evenSum = evenSum + arr[i];
// //                 }
// //                 else{
// //                     oddSum = oddSum + arr[i];
// //                 }
// //             }
// //             let sum = evenSum - oddSum;
// //             console.log(sum);
// //         }
// //         else{
// //             console.log("Please Enter an Array!")
// //         }
// //     }
    
// //     evenMinusOdd([5, 6, 99, 8, 76, 4, 68, 44]);



// // Question 8
// // ● Write a function that takes an array as a parameter and logs in the console the elements that have
// // even indexes only. Notice: this question is not asking you to log elements with even value, but
// // elements that are located on even indexes)
// // ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// // should be:
// // 5
// // 99
// // 76
// // 68
// // ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// // be:
// // 11
// // 3
// // car
// // Questions on built in JavaScript methods


// function printEvenIndexElement(arr){
//     if(Array.isArray(arr) ==  true){
//         for(i = 0; i < arr.length; i = i + 2){

//             console.log(arr[i])

//         }
//     }
//     else{
//         console.log("Please Enter an Array!")
//     }
// }

// printEvenIndexElement([5, 6, 99, 8, 76, 4, 68, 44])

// printEvenIndexElement([11, "Sam", 3, 7, "car"])

// function printEvenIndexElement(arr){
//     if(Array.isArray(arr) ==  true){
//         for(i = 0; i < arr.length; i++){

//             if(i%2 == 0) {

//                 console.log(arr[i])

//             }

//         }
//     }
//     else{
//         console.log("Please Enter an Array!")
//     }
// }

// printEvenIndexElement([5, 6, 99, 8, 76, 4, 68, 44])

// printEvenIndexElement([11, "Sam", 3, 7, "car"])



// // Questions 9 and 10 are dependent on the 

// // let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];



// // Question 9
// // Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// // adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// // let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// // function editSampleArray(arr){
// //     arr.pop();
// //     arr.push(32);
// //     console.log(arr);

// // }

// // editSampleArray(sampleArray);
// // // Question 10
// // // ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// // // and prints the sorted array on the console
// // // // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// // // You should use this sorting syntax - sort(function(a, b){return a-b});
// // // 
// // function sortSampleArray(arr){

// //     arr.sort(function(a, b){return a-b})   //call back function 

// //     console.log(arr)

// // }

// // sortSampleArray(sampleArray)










// // ****************************
// // The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// }
// ]
// }




// // Question 11
// // ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// // console
// // ○ // Use the dot notation "." to call the property you want to change


// // evangadiClass.lengthOfCourse = "5 Month"

// // console.log(evangadiClass)
// // console.log(evangadiClass.lengthOfCourse);

// // // Question 12
// // // ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// // // console
// // // ○ // Use an array method


// // evangadiClass.topicsCovered.push("Bootstrap");

// // console.log(evangadiClass)
// // console.log(evangadiClass.topicsCovered);

// // Question 13
// // ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// // age of the class. Print the result on the console


// function calcAverageAge(){

//     function getAge(student){
//         return student.age;
//     }

//     let age = evangadiClass.students.map(getAge)

//     let sum = 0;
//     for(i = 0; i < age.length; i++){
//         sum = sum + age[i];
//     }

//     // sum = age.reduce((previous, current) => previous + current, sum);
//     // sum = age.reduce(function(previousValue, currentValue) { previousValue + currentValue; return sum}, sum);

//     let averageAge = sum/age.length;
//     console.log(averageAge);
// }
// // Question 14
// // ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// // percentage of male students in the class. Print the result on the console
// // Puzzles
// // *******
// // Question 15: Test the divisors of three
// // ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// // numbers (on the console) between low and high, and for each of these numbers print
// // whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// // "div3" directly after the number.
// // Question 16: The famous coding interview question (FizzBuzz)
// // ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// // three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// // numbers which are multiples of both three and five print "FizzBuzz".
// // Question 19: Evens number
// // ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// // number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// // integer argument is an Evens number. The function prints 0 otherwise. 