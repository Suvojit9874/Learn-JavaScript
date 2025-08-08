// Important array methods 

const numbers =[4,2,5,8];

// function myFunc(number,index){
//     console.log("the number is",number," and the index is",index );
// };

// numbers.forEach(myFunc);

        //OR 

// numbers.forEach(function(number,index){
//     console.log("the number is",number," and the index is",index );
// });

        //OR

numbers.forEach((number,index)=>{
    console.log("the number is",number," and the index is",index );
}) ;       




const users=[
    {firstName:"suvojit",age:22},
    {firstName:"suvo",age:22},
    {firstName:"argha",age:22},
    {firstName:"debu",age:22}
]

users.forEach((user)=>console.log(user.firstName));