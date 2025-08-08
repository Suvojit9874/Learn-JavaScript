// every time we add a method in userMethods and then take its referrence in createUser , it will be an disaster to add method everytime , sometime we can forget to add it so we will make a trick

// we will create user object taking proto of userMethod
// then while calling the method in user , if there is no method in user then javascript will search the method in its __proto__ 
const userMethods={
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:function(){
        return this.age>=18;
    }
} 
function createUser(firstName , lastName,email,age,address){
    const user=Object.create(userMethods);  //****imp line of the century*/
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    
    return user;
}

const user= createUser("suvojit","chatterjee","suvojit@gmail.com",22,"ads");
const user1= createUser("sam","chatterjee","suvojit@gmail.com",28,"ads");
const user2= createUser("suvo","chatterjee","suvojit@gmail.com",2,"ads");

console.log(user , user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());

