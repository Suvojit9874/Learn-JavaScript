const person ={
    name:"harshit",
    age:22,
   "person hobbies":["guitar","sleeping","listening music"]
};

// how to iterate object 
// for in loop
//object.keys

// for(let key in person ){
//     console.log(key);       // this will print only key not value 
// }

for(let key in person ){
    console.log(person[key]);
}

 //or 

 for(let key in person ){
    console.log(`${key} : ${person[key]}`)
}

console.log(typeof (Object.keys(person)))
console.log(Array.isArray((Object.keys(person))));  // so this is an array


//or 

for(let key of Object.keys(person)){
    console.log(person[key]);
}

