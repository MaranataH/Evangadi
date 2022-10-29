

// Functions and conditional statements - practice exercise
// Questions on functions
// ********************
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function

function myFirst() {
    console.log("Hello!!");
    
}
myFirst();


// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// consoleesa
// ○ Feel free to give any value as a parameter in your function

function mySecond (params) {
    console.log(params);
    
}
mySecond("Morning")




// function mySecond(param_1) {
//     console.log(param_1);

// }
// let a = "mariti"
// let b = "Elroi"
// let c = 10

// mySecond(a);
// mySecond(b);
// mySecond(c);


// Question 3


// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
 function myThird(parm) {
    mySecond ( "hey"   + "  "+ parm)
    
 }
 myThird("maranata");


// function myThird(param_2){
// mySecond("Hi " +param_2 );
// }
// myThird("Hailegnaw");
// myThird("Alem")

// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console. Remember, this question is here to explain the concept of
// function delegation in JavaScript.


// function myFourth (myList) {
//     // cheak if the input is array 
//     if( !Array.isArray(myList)){
//      mySecond("please put an array ")
//     }
//     // cheak if the array elemens are all numbers 
//     else if (isNaN (myList[0])) {
//         mySecond("please put a number")
        
//     }
   
//    else mySecond(myList[0]) 
// }
// myFourth(["a", 3 , 4,5])
// myFourth([3,4,5,6,])
// myFourth(3,4,5,)


// function myFourth(myList){
//     console.log(myList[0]);
//     mySecond(myList[0]);

// }

// myFourth([2, 3, 4]);


// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console
// Questions on functions from edabit (https://edabit.com)
// ************************************************
// It is very important that you do a lot of questions to advance your coding skills. Only practice
// makes you perfect. You can use online sources like https://edabit.com/ and solve as many problems
// as possible starting from an easy level. Note: when you practice questions from edabit, we advise
// you to copy the questions, paste them on your VSC and solve them there. This makes your life
// easier as opposed to doing the exercises on edabit’s platform. Below, we have selected questions
// from edabit.com and included their URL link for your reference.

// function myFifth(myList) {
//     // cheak if the input is array 
//     if( !Array.isArray(myList)){
//         mySecond("please put an array ")
//         }
//        // cheak if the array elemens are all numbers 
        
//         else if (isNaN (myList[0])) {
        
//         mySecond("please put a number")
//         }

    
//         else mySecond(myList[0]+ myList[1]) 
    
// }

// myFifth(4,8)
// myFifth([7,4,6])
// myFifth(["a",2,4])




// function myfifth(myList){
//     if (myList.length !==2) {
//         return "please enter two length array" ;    
//     } 
//     if (typeof(myList[0]) !=="number" || typeof (myList[1]) !== "number" {
//         return "please enter Number Value";
        
//     }

    
//     mySecond(myList [0] + myList[1]);
// }

// myfifth([2,7]);

// myfifth =(myList)=>{ 
//     if(myList.length !==2){
//         return"please enter two length array";
//     }
//     if (typeof (myList[0]) !== "number" || typeof (MyList[1]) !== "number")
//     {
//     console.log(myLis[0] +(myList[1]));
//         return "Please enter Number value"
//     }
    
// }

// console.log(perimeterCircleSquare ([2,3])) ;
// console.log(perimeterCircleSquare([3,4,5,6])); 
// console.log(perimeterCircleSquare([e,7,3]));


// Question 6
// ● Write a function that takes an integer minutes and converts it to seconds.
// ○ https://edabit.com/challenge/8q54MKnRrm89pSLmW





// function minutesToSeconds(mints){
//     mySecond(mints * 60);
//     return mints * 60
// }
// minutesToSeconds(2);



// Question 7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.
// ○ https://edabit.com/challenge/NAQhEoxbofPidLxm9

// function incrementByOne(num){

//     return ++num

// }

// a = incrementByOne(3);
// mySecond(a);


// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.
// ○ https://edabit.com/challenge/3CaszbdZYGN4otQD8

// function triangleArea(b,h){
//     return b*h/2
// }
// area = triangleArea(4, 2)
// mySecond(area)

// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.
// ○ https://edabit.com/challenge/8Qg78sf5SNDEANKti

// function totalAnimalsLegs(chick, cows, pigs){
// let totalLegs = (chick*2) +(cows*4) + (pigs*4)
// return totalLegs;
// }
// totalLegs = totalAnimalsLegs (3,5,2)
// mySecond(totalLegs);


// Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and
// returns a value that is 3 times the first element of the array.
// Questions on Conditional statements and - practice exercise
// ****************************************************
// function tripleNum(myArray) {
//     return myArray[0]*3
    
// }
// a=tripleNum([2,5,])
// mySecond(a)

// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
// ○ https://edabit.com/challenge/QSnaSH5S3oxZkwcNc



// function isEqual(num1,num2){
//     if (num1===num2) {
//         return true;
//     } else {
//         return false;
        
//     }
// }
// b= isEqual(2,2)
// a= isEqual(20,22)
// c= isEqual(3,"4")
// mySecond(a)
// mySecond(b)
// mySecond(c)




// Question 12

// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
// ○ https://edabit.com/challenge/qMr6wYGr6NaXAPQGF


// function divBy100(num) {

//     if (num % 100 == 0) {

//         return true;
//     }

//     else {
//         return false;
//     }
// }

// a = divBy100(2000)
// mySecond(a)

// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
// ○ https://edabit.com/challenge/kuzB5CMXiKDEYKXAP


// function evenOrOdd(num) {
//     if (num % 2==0) {
//         return "even"
        
//     } else { 
//         return "odd"
        
//     }
    
// }b = evenOrOdd(4)
// a = evenOrOdd(3)
// mySecond(a)
// mySecond(b)

// evenOrOdd = (num) => num % 1? "even":"odd"
// b = evenOrOdd(10)
// mySecond(b)
// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79
// Hint on how to organize your folders and files
// ● Create a folder called “Functions and conditions” in your Evangadi folder
// ● Inside your “Functions and conditions” folder, create an html file called “index.html”.
// ● Inside your “Functions and conditions” folder, create a folder called “JS”. Inside of your
// “JS” folder, create a file called “script.js”
// ● Link your “script.js” file in your HTML.
// ● Before you start writing your code, always test if your JavaScript file is linked correctly to
// your HTML. To test if your JS file is loaded correctly, type the following code and see if
// you get this alert message on your browser;
// ○ alert("your JS file is connected!!");
// ● To check the result of each code you write in the console, you will need to open your
// “index.html” file in browser, right click the page and select “inspect” and select “console”
// ● As specified in the questions, for questions from edabit, make sure to just copy the questions
// and work on your VSC rather than solving them on edabit.
// ● Now start working on your assignment. Happy coding!

// function calculateGrade(score) {

//     if (score > 100 || score < 0) {

//         return "Invalid score";
//     }

//     else if (score >= 90) {

//         return "A";
//     }

//     else if (score >= 80 ) {

//         return "B";
//     }

//     else {

//         return "C";
//     }
// }

// grade = calculateGrade(99);
// mySecond(grade);
// grade = calculateGrade(82);
// mySecond(grade);
// grade = calculateGrade(55);
// mySecond(grade);
// grade = calculateGrade(107);
// mySecond(grade);
// grade = calculateGrade(-43);
// mySecond(grade);

