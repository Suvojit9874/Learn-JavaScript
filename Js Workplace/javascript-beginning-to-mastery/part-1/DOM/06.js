//get and set attributes
/*
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://www.google.com");
*/



//get multiple elements using getElements by class name
//get multiple elements using queryselectorAll 
// const navItems=document.getElementsByClassName("nav-item"); //HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems)); //false


/*
// we  can't use forEach method to iterate through HTMLCollection
// use simple for loop / for of loop
const navItems=document.getElementsByTagName("a");
for (let i = 0; i < navItems.length; i++) {
    const element = navItems[i];
    element.style.color="cyan";
    element.style.backgroundColor="black";
}
//we can't use forEach because it is not array but if we convert it to an array then we can do it
navItems=Array.from(navItems);
console.log(Array.isArray(navItems));
navItems.forEach((element)=>{
    element.style.color="green";
    element.style.backgroundColor="black";
});
*/

let navItems1=document.querySelectorAll(".nav-item a"); // NodeList
console.log(Array.isArray(navItems1)); //false
//but both HTMLCollection and NodeList are Array like object
//for NodeList we can iterate it by 
// 1)convensional for loop 
// 2) for of loop
// 3) forEach method (difference between NodeList and HTMLCollection)
console.log(navItems1[1]);
navItems1.forEach((element)=>{
    element.style.color="blue";
    element.style.backgroundColor="black";
});
