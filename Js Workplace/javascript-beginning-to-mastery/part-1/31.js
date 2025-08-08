// function returning function 

// function myFunc(){
//     function hello(){
//         console.log("hello world");
//     };
//     return hello;
// };

// const ans = myFunc();
// ans();

function myFunc(){
    return function(){
       return "hello world"
    };
};


const ans = myFunc();
console.log(ans());
// console.log(myFunc());
