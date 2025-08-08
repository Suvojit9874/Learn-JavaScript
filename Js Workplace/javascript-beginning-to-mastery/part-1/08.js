let num1=7;
let num2="7";
// == VS ===
console.log(num1 == num2); //true
// so here only the value is checked ,not data type ,so it gives true so in js there is ===
console.log(num1 === num2); //false

// != VS !== 
console.log(num1 != num2); //false ,but 7 and "7" is different , so there is !==
console.log(num1!==num2);

// if else

let age =17;
 if(age>18){
    console.log("USer can play football");
 }else{
    console.log("user can play mario");
 }

 let num=14;
 if(num%2===0){
    console.log("Even");
 }else{
    console.log("Odd");
 }


 // falsy value
 //false , "" , null , undefined ,0

 // anything else is truthy value

 let firstName; //undefined
 if(firstName){  //since false , then else part will execute
    console.log(firstName);
 }else{
    console.log("firstNAme is kinda empty ")
 }
