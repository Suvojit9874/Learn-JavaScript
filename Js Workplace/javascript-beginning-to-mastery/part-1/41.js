const person={
    firstName:"suvojit",
    age:22,
    about : function() {
        console.log(this.firstName , this.age);
    }
}

// don't do this
// const func=person.about;
// func();

// use this

const func= person.about.bind(person);
func();