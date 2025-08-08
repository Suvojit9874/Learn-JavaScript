// static method and its properties
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
        eat(){
            return `${this.firstName} is eating `;
        }
        isCute(){
            return true;
        }

        static personInfo(){
            console.log("this is static method ")
        }

        static desc="this is like global variable"
}

const person1=new Person("suvojit","chatterjee");
console.log(person1);

// we don't need to call static method via object we can directly call them via class
Person.personInfo();
console.log(Person.desc);
// person1.personInfo();  //not valid







