// intro to arrays
//reference type

// let fruits =["apple","mange","grapes"];
let mixed=[1,2,3,4,"string",null,undefined];
console.log(mixed);
let obj ={};
console.log(typeof mixed);
console.log(typeof obj);
console.log(Array.isArray(obj));    //object literals
console.log(Array.isArray(mixed));  //array


// array push and pop

let fruits =["apple","mange","grapes"];
fruits.push("banana");      //add banana to end of the array
console.log(fruits);        

let poppedFruits = fruits.pop();        //pop remove element of last index 
console.log(poppedFruits);


//shift and unshift


fruits.unshift("banana");      //add banana to 1st index of  array
console.log(fruits);        

// let poppedFruits = fruits.shift();        //shift remove element of array from the 1st index 
console.log(poppedFruits);




// push pop is faster than shift unshift 