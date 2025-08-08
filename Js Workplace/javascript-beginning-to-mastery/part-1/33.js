// Map method 

const numbers =[1,2,3,4,5,10];

// const square = (number) => number*number; 
// const squareNumber = numbers.map(square);

// const squareNumber = numbers.map((number => number*number)); //using arrow function 
// console.log(squareNumber); 


//map function return the value , if you want to print then squarenumber will be undefined 
// const square = (number) => console.log(number*number); 
// const squareNumber = numbers.map(square);
// console.log(squareNumber);   



// numbers.map((number,index)=>{
//     console.log("the number is",number," and the index is",index );
// }) ;        //map and forEach loop is similar 

// real life example 
// const users=[
//     {firstName:"suvo" ,gender: "male"},
//     {firstName:"debu" ,gender: "male"},
//     {firstName:"argha" ,gender: "male"}
// ]

// const userName =users.map((user)=> user.firstName);
// console.log(userName);




// Filter method

// const evenNumber =numbers.filter((number)=>number%2===1);  //filter method work based on  true or false ,if true then it return the number
// console.log(evenNumber); 


// Reduce 

// Aim sum of all the numbers in array 

// const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
// const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,100);   // initial accumulator value is set 100
// console.log(sum);

// accumulator     , currentvalue    , return 
//    1                 2                3
//    3                 3                6
//    6                 4                10
//    10                5                15
//    15                10               25



// const number1 =[5,9,1200,400,3000];
// number1.sort();
// console.log(number1); 

// sort method sort the array wrto ascii value 
// ["5","9","1200","410","3000"]
// [53,57,49,52,51]   // this are the ascii value of the number array's 1st element 
// sort method sort like dictionary(alphabetically)


// number1.sort((a,b)=>a-b); // for ascending 
// console.log(number1);

// number1.sort((a,b)=>b-a); // for descending 
// console.log(number1);



// Find method 

// const myArray =["hello","cat","doggy","lion"];

// const ans =myArray.find((string)=>string.length===3);
// console.log(ans);   //only 1st occurance will be print

// // real life example 

// const users =[
//     {userID:1,username:"suvo"},
//     {userID:2,username:"sanju"},
//     {userID:3,username:"argha"},
//     {userID:4,username:"debu"}
// ]

// console.log(users.find((user)=>user.userID===3));




// Every method

// const numbers2 =[2,4,6,10];
// const ans = numbers2.every((number)=>number%2===0);
// console.log(ans);

//call back function ----> true / false (boolean)
//every method ----> true / false (boolean)
//if there exist at least one odd number then every method will give false .

// //real world example
// const userCart =[
//     {productName:"laptop",price:42000},
//     {productName:"mobile",price:12000},
//     {productName:"TV",price:62000}
// ];

// const ans2=userCart.every((item)=>item.price<100000);
// console.log(ans);



// //Some method 
// // kya ek vi number esa hai jo even hai?
// const numbers2 =[2,4,6,10,5];

// const ans = numbers2.some((num)=>num%2===1);
// console.log(ans);





// Fill method 
// value ,start , end 
/* 
const myArray =new Array(10).fill(1);
console.log(myArray);     */

/*
const myArray=[1,2,3,4,6,77,4];
myArray.fill(0,2,4);
console.log(myArray);          */






// Splice method
// start ,delete ,insert

const myArray=["item1","item2","item3"];
//delete 
// var item =myArray.splice(1,1);
// console.log(myArray);
// console.log(item);

// insert 
// myArray.splice(1,0,"inserted Item");
// console.log(myArray);

// insert and delete 
myArray.splice(1,2,"inserted item1","inserted item2");
console.log(myArray);