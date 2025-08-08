//reference types 
//array

let array1=["item1","item2"];
let array2= array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");

console.log("array1",array1);       //when two array are same then their reference is same ,they store in heap memory at same place 
console.log("array2",array2);