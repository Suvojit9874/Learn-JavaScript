//call
/* const person={
        firstName:"suvojit",
        age:22,
        about : function() {
            console.log(this.firstName , this.age);
        }
    }
    const person1={
        firstName:"mohit",
        age:40
        
    }    
// i want to use about method of person for person1
person.about.call(person1); */


// ------------------------------------------------------



function about(hobby, favMusician) {
    console.log(this.firstName , this.age , hobby , favMusician);
}
const person={
    firstName:"suvojit",
    age:22
   
}
const person1={
    firstName:"mohit",
    age:40
    
}    
about.call(person,"cricket","arijit singh");
about.call(person1,"guitar","mozart");



// apply is same as call but here we pass the parameter in array
about.apply(person,["sing","kk"]);



// bind method do not execute the method it return a function and then you can use it anywhere
const func= about.bind(person1,"tt","A r rahaman");
func();

// we can't use call apply bind with arrow function , sinc arrow function ka this nehi hota 



