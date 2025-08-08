function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
//using prototype
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user = new createUser(
  "suvojit",
  "chatterjee",
  "suvojit@gmail.com",
  22,
  "ads"
);
const user1 = new createUser(
  "sam",
  "chatterjee",
  "suvojit@gmail.com",
  28,
  "ads"
);
const user2 = new createUser(
  "suvo",
  "chatterjee",
  "suvojit@gmail.com",
  2,
  "ads"
);
console.log(user, user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());


``` if you only want to log object own property not the __proto__ 
for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}

```
