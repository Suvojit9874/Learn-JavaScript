// select element using query selector
const heading =document.querySelector("#main-heading");
console.log(heading);


console.log(document.querySelector(".nav-item")); //this will not select all the element with this class
//to get all
console.log(document.querySelectorAll(".nav-item"));