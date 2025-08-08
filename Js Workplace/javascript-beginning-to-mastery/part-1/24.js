// Hoisting 
hello();

function hello(){
    console.log("hello world");   // function declare in 4th line but we  called the function in 2nd line ,this is valid  , but if we do the same using arrow function then there will be error
}

// const hello = function(){
//     console.log("hello world"); // but this is not valid
// }


// function inside function 

function app (){
    const myFunc = () => {
        console.log("hello from myFunc");
    }
    const addTwo =(num1,num2)=> {
        return num1+num2;
    }
    const mul =(num1,num2) => num1*num2;
    console.log("Inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}

app();