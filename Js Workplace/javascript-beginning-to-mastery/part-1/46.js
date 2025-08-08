const obj1={
    key1:"value1",
    key2:'value2'
}

const obj2=Object.create(obj1);

console.log(obj1);
console.log(obj2);
// you can see obj2 is empty but see a magic
console.log(obj2.key1); // obj2 don't have key 1 but from  where the value is comming? (obj1)
 // obj2 has obj1 as proto
console.log(obj2.__proto__);
// console.log(obj2.[[prototype]]); //not valid

// __proto__ and [[prototype]] both are same . 


// prototype is different