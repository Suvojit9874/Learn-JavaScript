// how to clone array 
//how to concate to array
let array1=["item1","item2"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);
// let array2 =array1.slice(0).concat(["item3","item4"]);
// array1.push("item3");
// console.log(array1===array2);       //if we clone in this manner then they store in different heap memory
// console.log(array1);
// console.log(array2);


//new way
//spread operator

// let array2=[...array1];
let array2=[...array1 ,"item3","item4"];

let array3=["item3","item4"];
let array4=[...array1,...array2,...array3]
array1.push("item3");
console.log(array1===array2); 
console.log(array1);
console.log(array2);
console.log("array4",array4);


