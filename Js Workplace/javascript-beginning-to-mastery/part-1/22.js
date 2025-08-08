//object inside array 
// very useful in real world applications
const users = [
    {userid:1,firstName:"suvojit",gender:"male"},
    {userid:2,firstName:"argha",gender:"male"},
    {userid:3,firstName:"debu",gender:"male"}

]

for(let user of users){
    console.log(user);
}

for(let user of users){
    console.log(user.userid);
}

//nested destructureing 
const [user1,user2,user3]=users;
console.log(user1);

 //to access the object key.value pair 
const [{firstName}, ,{gender}]=users;
console.log(firstName);
console.log(gender);

const [{firstName:value1}, ,{gender:value2}]=users;
console.log(value1);
console.log(value2);
