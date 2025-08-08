let age =22;
let Myname="suvojit";

// let aboutMe=" my name is "+ Myname+ " and my age is " + age ;  //old style bro
let aboutMe =`my name is ${Myname} and my age is ${age}`;
console.log(aboutMe);

let firstName;
console.log(firstName);     //undefined data type
firstName =" Suvojit";
console.log(typeof firstName,firstName);


let myVariable =null;
console.log(myVariable);     // null data type 
myVariable="Suvojit";
console.log(myVariable,typeof myVariable);
console.log(typeof null);           //it will print object which is a bug but js maker didnt fix it because if it fixed then the software which are made using js have to be rebuilt

//BigInt
let myNumber = BigInt(12);
console.log(typeof myNumber);
let sameNumber =123n;   //this is also systex for Big Int
console.log(Number.MAX_SAFE_INTEGER);  // this is the highest value of number 
console.log(Number.MIN_SAFE_INTEGER)
console.log(myNumber+sameNumber);  // we can add two BigInt number 

