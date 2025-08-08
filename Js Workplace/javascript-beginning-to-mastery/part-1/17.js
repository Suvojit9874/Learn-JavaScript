// difference between dot and bracet notation

const person ={
    name:"harshit",
    age:22,
   "person hobbies":["guitar","sleeping","listening music"]
};
// here person hobbies have space so we can not access this by dot 
// console.log(person.person hobbies); //not valid 

console.log(person["person hobbies"]); //valid 

const key ="email";
// now make a key value pair using key=email
person[key]="suvojitchatterjee84@gmail.com";  // here if we do it by person.key="suvojitchatterjee84@gmail.com" then key-value pair will be key:"  ...."; which is wrong ,
console.log(person);      
