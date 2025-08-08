// Maps 
//  map is an iterable
// store data in ordered pair
// store key value pair (like object) 
// duplicate keys are not allowed like object 
//  different between maps and object
// object can have only string , symbol as key 
//in maps you can use anything as key 
// like array, number , string 

const person=new Map();
person.set("firstName","suvojit");
person.set("age",22);
person.set(1,"one");
console.log(person);
console.log(person.get("age"));
console.log(person.keys());

// person.forEach((key,value,map)=>console.log(key,value,map));
person.forEach((key,value)=>console.log(key,value));

// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for(let key of person.values()){
//     console.log(key , typeof key);
// }

// for(let key of person){
//     console.log(Array.isArray(key));
// }


for(let [key,value] of person){
    console.log(key , value);
}
console.log("--------------------------------------");

const newPerson=new Map();
newPerson.set("firstName","suvojit");
newPerson.set("age",22);

const person1={
    id:1,
    "lastName":"chatterjee"
}
newPerson.set(person1,{gender:"male",salary:2245});
console.log(newPerson);

console.log(newPerson.get(person1).gender);