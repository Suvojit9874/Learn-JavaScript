// clone using Object.assign

// memory

const obj={
    key1:"value1",
    key2:"value2",
}

// const obj2={...obj};  //do
// const obj2 =obj;      //dont's 
const obj2=Object.assign({} ,obj);
obj.key3="value3";
console.log(obj)
console.log(obj2)