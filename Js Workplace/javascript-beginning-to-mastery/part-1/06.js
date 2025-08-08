let age =22;
let name="suvojit";

console.log(typeof age);
console.log(typeof name);

//convert number to string
age =age + ""; 
console.log(typeof age); // 22 --> "22"

//convert string to number
let mystr ="34";    //string 
mystr=  +"34"; //number
console.log(typeof mystr);

//or
age =String(age);
console.log(typeof age);

name = (Number)(name);
console.log(typeof name);


let a="22";
let b="10";
let add = +a + +b;  // now this is a number so ans will be 22
console.log(add);
console.log(typeof add);




console.log("hello"+10+ 20);
console.log(10+20+"hello");