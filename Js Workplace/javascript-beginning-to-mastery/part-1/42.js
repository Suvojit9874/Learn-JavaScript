// arrow function ka this nehi hota.
const person={
    firstName:"suvojit",
    age:22,
    about :() => {
        console.log(this)
        console.log(this.firstName , this.age);
    }
}
person.about();

// arrow function er this surrounding theke nai 
// here this is window object


// we can write in this manner also
const person1={
    firstName:"suvojit",
    age:22,
    about(){
        console.log(this)
        console.log(this.firstName , this.age);
    }
}

person1.about();