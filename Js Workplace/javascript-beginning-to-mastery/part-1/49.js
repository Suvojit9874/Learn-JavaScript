// new keyword

//constructor function
function CreateUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

CreateUser.prototype.about= function(){
    console.log(this.firstName , this.age);
}

const user1=new CreateUser("suvo",25);
console.log(user1);
user1.about();

// new keyword
// 1) create empty object and this pt it.
// 2) return this
// 3) new create a connection of proto and prototype