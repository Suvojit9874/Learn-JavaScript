// function (that function create )
// 2) add key value pair
// 3) return the object 

function createUser(firstName , lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18=function(){
        return this.age>=18;
    }
    return user;
}

const user= createUser("suvojit","chatterjee","suvojit@gmail.com",22,"ads");
const user1= createUser("sam","chatterjee","suvojit@gmail.com",28,"ads");
const user2= createUser("suvo","chatterjee","suvojit@gmail.com",2,"ads");
console.log(user);
console.log(user1);
console.log(user2);