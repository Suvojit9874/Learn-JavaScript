// array destructureing
const myArray =["apple","mango","grapes","fruits4"];
// let myvar1 =myArray[0]; //known process

// let [myvar1, ,myvar2]=myArray; //myvar1=apple , myvar2=grapes will be set ,since we skip 2nd value

// console.log("value of myvar1",myvar1)
// console.log("value of myvar2",myvar2)



// let myNewArray = myArray.slice(2);
// this can also done by
let [myvar1, myvar2 ,...myNewArray]=myArray;
console.log(myNewArray);


console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log("new array",myNewArray);




