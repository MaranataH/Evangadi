// //Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
console.log("test");

// 1.1 Select the element with an id of "sample1".
let selectElement = document.getElementById("sample1")
// // 1.2 Print the element itself on the console upon page refresh.
console.log(selectElement);

// // 1.3 Print the content of the element on the console upon page refresh.

// // Hint: Use the "textContent" property to select the content

// console.log(sample1.textContent);

// // Question 2: The following questions are based on the HTML code found under the
// // section labeled "For question 2".


// // 2.1 Select the element with an ID of "techCompanies" and display it on your
// // console. (Do not use "querySelector" for this question)
//  let elementWithId  = document.getElementById("techCompanies")
//  console.log(elementWithId);
// // 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// // display it on your console.

// let elementWithQuery = document.querySelector("#techCompanies")
// console.log(elementWithQuery);
// // 2.3 How many tech companies are listed under the ul element with an id of
// // "techCompanies"? Use "querySelectorAll" to count the total.

let totalLiElement = (document.querySelectorAll("#techCompanies li").length)
console.log(totalLiElement);



// let totalLiElement = document.querySelectorAll("li")
// console.log(totalLiElement);


// 2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
let classNameRed = document.querySelectorAll(".red")
console.log(classNameRed);

let classNameRedElement = document.getElementsByClassName("red")
console.log(classNameRedElement);

// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console

let newLiHtml =document.createElement ("li")

newLiHtml.textContent = "Face Book"
console.log(newLiHtml);
// 2.6 Give the newly created element a class of "blue" using JavaScript
newLiHtml.className ="blue"

// 2.7 Append the newly created element next to the the "Sony" li element
document.getElementById("techCompanies").append(newLiHtml)


// 2.8 How many of the tech companies are labeled blue? Find the result using


// JavaScript and display the result inside the "blueCompanies" div.

let blueDiv = document.querySelectorAll("#techCompanies .blue").length
console.log(blueDiv);
 





let para = document.createElement("h1")
para .textContent= blueDiv
document.querySelectorAll("#techCompanies")[0].append(para)


// let maranata = document. createElement('h1')

// maranata.textContent= ("bemenet and yeabsera")
// document.querySelector('#sum').append(maranata)




//console.log(NewBlueComp);

// document.getElementById("blueCompanies").append(NewBlueComp)

// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.

// selecting
let lightBlue = document.getElementById ("yesBackground")

let none = document.getElementById("noBackground")


// our two functions
function removeBackGroundToNone() {
    document.body.style.background = ""
    
}
function ChangeBackGroundToLightBlue() {
    document.body.style.background = "#99ecff"

}
//binding

lightBlue = addEventListener("click",ChangeBackGroundToLightBlue)   


none = addEventListener('dblclick',removeBackGroundToNone)









// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.

let newAdder = document.getElementById('#adder')

let newFirstValue = document.getElementsByName('first-value')[0]
 let newSecondValue = document.getElementsByName('second-value')[0]

 let resultvalue = document.getElementById('sum')
 let emptySpace = " "

function result(e) { 
    e.preventDefault()
     if (isNaN(newFirstValue) && isNaN(newSecondValue)) {
    emptySpace = "Please enter numerical values for both values";
}    
    else if (isNaN (newFirstValue)) {
    emptySpace= "please enter first value"
    } else if (isNaN (newSecondValue)) {
        emptySpace = "please enter second Value"
        
    }
    else  (
        emptySpace =sumTwo (newFirstValue, newSecondValue)

    )
    console.log(emptySpace);
    resultvalue.textContent = emptySpace
function sumTwo(a,b) {
    a = Number (a)
    b = Number (b)
    return a+b
}
}


// 1. Display the result on the console
 
// 2. Display the result underneath the form

// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form
