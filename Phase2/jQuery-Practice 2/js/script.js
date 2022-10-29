

//  //Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.
//this is selecting
 let samplel1 = $("#sample1")
 

// 1.2. Print the element itself on the console upon page refresh.
// console.log(samplel1 [0].outerHTML);
console.log(  samplel1.html());
// console.log ("samplel1.html()");
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to select
// the content of the element
console.log(samplel1.text());


// Question 2:
// The following questions are based on the HTML code found under the section labeled "Fo

// question 2".

// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
//there is two option in this quetion
let newTech = $("#techCompanies" )

console.log(newTech);

// console.log(newTech[0].outerHTML);
// console.log("newTech.text")
// 2.2. How many tech companies are listed under the ul element with an id of

// "techCompanies"?
let newTech2 = $("#techCompanies li").length


console.log(newTech2);
// 2.3. Select all elements with a class of "red" and display them on the console.


// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// 2.5. Give the newly created element a class of "blue" using jQuery
// 2.6. Append the newly created element next to the the "Sony" <li> element
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.
// 

// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console




// this is question for 3

function check (e){ 
// let adder1 = $("#adder")

let firstValue = $('input[name="first-value"]').val()
let secondValue = $('input[name="second-value"]').val()
let result = $("#sum")
  
    e.preventDefault()
    if(isNaN(firstValue)&& isNaN(secondValue)){
    result.text( "Please enter numerical values only" )
    }
    else if(isNaN(firstValue)){
        result.text("please enter the first value")
    }
    else if(isNaN(secondValue)){
        result.text("please enter the second value")
    }
    else {result.text(sumAndAverage(firstValue, secondValue))
    }

    // this is question for 1
    console.log(result.text);

}

   

function sumAndAverage (a,b){
    return (Number(a) + Number(b))/2

}

// binding 
let adder2 = $("#adder")
$(adder2).on ("submit",check )

// 3.2. Display the result underneath the for

// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form





// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.
// Question 5: (Adding interactivity features on apple.com website’s footer section)
// The following question is based on the responsive Apple website you built back in phase 1. As
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of
// the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote
// from the link provided below to implement the interactivity of apple.com's footer section
// Responsive code for apple.com:
// ● https://evangadi.com/files/apple/responsive-code-jquery-for-footer.zip
// You can refer to apple.com’s live website to check how the footer behaves:
// ● https://www.apple.com/
// In summary, the footer fully displays all the five columns in expanded state while viewed on
// desktop or tablet size devices. You are required to implement the following mobile size
// features.
// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to
// a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right
// side of each <h3>. (Hint: everything up to this point can be achieved without using
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3>
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement
// the following feature)////