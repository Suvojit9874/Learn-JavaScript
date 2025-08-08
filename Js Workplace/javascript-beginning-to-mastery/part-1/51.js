// here the daddy enters ****

class CreateUser{
    constructor(firstName , lastName,email,age,address){
        console.log("creating object"); 
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }

}

const user= new  CreateUser("suvojit","chatterjee","suvojit@gmail.com",22,"ads");
const user1= new CreateUser("sam","chatterjee","suvojit@gmail.com",28,"ads");
const user2= new CreateUser("suvo","chatterjee","suvojit@gmail.com",2,"ads");
console.log(user , user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());

console.log(Object.getPrototypeOf(user1));