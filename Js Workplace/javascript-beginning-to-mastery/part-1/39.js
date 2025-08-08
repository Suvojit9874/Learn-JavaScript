// method ( function inside object)

// const person={
//     firstName:"suvojit",
//     age:22,
//     about : function() {
//         console.log("hello world");
//     }
// }
// person.about();

function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person={
    firstName:"suvojit",
    age:22,
    about : personInfo
}
const person1={
    firstName:"sayan",
    age:18,
    about : personInfo
}
const person2={
    firstName:"sukdev",
    age:19,
    about : personInfo
}


person.about();
person1.about();
person2.about();

// this point the  current object 



console.log(this);  // this is window object 
console.log(window);



```
// function myFunc(){
//     console.log(this)   //window
// }

// myFunc()

//but 


function myFunc(){

    "use strict"
    console.log(this)   //error
}

myFunc()

```