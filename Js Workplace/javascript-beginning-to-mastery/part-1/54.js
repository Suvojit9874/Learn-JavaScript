class Person{
    constructor(firstName ,lastName ){
        this.firstName=firstName;
        this.lastName=lastName;
    }
        get fullName(){
            return `${this.firstName}  ${this.lastName}`;
        }
       set fullName(fullName){
           const [firstName,lastName] =fullName.split(" ")
            this.firstName=firstName;
            this.lastName=lastName;
        }
}

const person=new Person("suvojit","chatterjee");
console.log(person);
console.log(person.firstName);
// here see it carefully , i have not call the method by fullName() . but it execute . here we have made that method getter method thats wht this is happening
console.log(person.fullName);

//setter
person.fullName="Suvojit chatta";
console.log(person);







