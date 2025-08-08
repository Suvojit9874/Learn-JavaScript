//function declaretion 

// function sing(){
//     console.log("happy birthday to you ");
// }

// sing();

// function expresion 

// const sing = function(){
//     console.log("happy bd to you ");
// }
// sing();

//Arrow function

const sing = () => console.log("happy bd to you ");
sing();

const isEven = number => number % 2 ===0;
console.log(isEven(10));


// function sumTwoNumber(number1,number2){
//     return number1+number2;

// }

const sumTwoNumber = (number1,number2) => {
        return number1+number2;
    
    }

//function expression 
// const  sumTwoNumber = function(number1,number2){
//     return number1+number2;
// }

const sum= sumTwoNumber(4,5);
console.log(sum);
console.log(undefined+undefined);  //NaN -> not a number 
console.log(2+3+undefined);

