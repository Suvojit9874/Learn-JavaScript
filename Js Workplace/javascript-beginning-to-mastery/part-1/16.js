//object is reference type
//array are good but not sufficient for real world data
//object store key value pair //by default key are string
//object don't have index
//how to create object

const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(typeof person, person);

//how to access data from object
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
//we can also access object using 3rd bracket
console.log(person["name"]);

// how to add key value pair to object
person.gender = "male";
console.log(person);


