// spread operator 
const newArray=[..."abc"];     // it will devide into array with a,b,c values
console.log(newArray);   
const array1=[..."123456789"];
console.log(array1);

// spread operators in object
const obj ={
    key1 :"value1",
    key2:"value2",
   
}
const obj1 ={
    key3 :"value3",
    key4:"value4",
    key1:"value59"
}
const obj2={...obj,...obj1 , key69:"valu69"};
console.log(obj2);


const newobj={..."abc"};
console.log(newobj);


