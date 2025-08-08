function createUser(firstName , lastName,email,age,address){
    const user=Object.create(createUser.prototype);  
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}
//using prototype 
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18=function(){
    return this.age>=18;
}


const user= createUser("suvojit","chatterjee","suvojit@gmail.com",22,"ads");
const user1= createUser("sam","chatterjee","suvojit@gmail.com",28,"ads");
const user2= createUser("suvo","chatterjee","suvojit@gmail.com",2,"ads");
console.log(user , user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());

